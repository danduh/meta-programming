import "reflect-metadata";

export interface ComponentConfig {
    selector: string,
    templateUrl: string,
    styleUrls: string[],
}

interface Constructable<T> {
    template?: any;

    new(...args: any): T;
}

const loadTemplate = async (tmpl) => {
    return await fetch(tmpl).then(str => str.text())
}

const loadStyles = async (urls) => {
    return await fetch(urls[0]).then(str => str.text())
}

const combineElement = (html, style): HTMLTemplateElement => {
    html = html.replaceAll('(click)', 'action-click')
    const template = document.createElement('template');
    template.innerHTML = `
  <style>
  ${style}
  </style>
  ${html}
 `;
    return template
}

export const Component = (conf: ComponentConfig) => {
    return function (clazz: Constructable<any>) {

        let tmpl = loadTemplate(conf.templateUrl);
        let style = loadStyles(conf.styleUrls);

        Object.getOwnPropertyNames(HTMLElement.prototype).forEach((name) => {
            if (name !== 'constructor') {
                Object.defineProperty(
                    clazz.prototype,
                    name,
                    Object.getOwnPropertyDescriptor(HTMLElement.prototype, name) ||
                    Object.create(null)
                );
            }
        });

        function update(value) {
            document.querySelectorAll('*').forEach((elem) => {
                if (elem.textContent.includes("{{title}}")) {
                    if (elem.children.length === 0)
                        elem.textContent = elem.textContent.replace('{{title}}', String(value))
                }
            })
        }

        const cl = new clazz()

        class Pr {
            set(target, prop, receiver) {
                if (typeof receiver === 'number') {
                    target[prop] = receiver;
                    update(receiver)
                }
                return Reflect.get(target, prop, receiver);
            }
        }


        Promise.all([tmpl, style]).then((resp) => {
            const template = combineElement(resp[0], resp[1]);
            const elem = document.getElementsByTagName('my-app')[0];
            elem.appendChild(template);
            const clone = template.content.cloneNode(true);
            document.body.appendChild(clone);

            const proxy3 = new Proxy(cl, new Pr());

            const allClicks = template.querySelectorAll("[action-click]");
            allClicks.forEach((el) => {
                const action = el.getAttribute('action-click');
                if (proxy3[action]) {
                    el.addEventListener('click', () => {
                        proxy3[action]()
                    })
                }
            })

        })
    }
}

@Component({
    selector: 'app-hero-component',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    template
    public count = 0;

    constructor() {
    }

    inc() {
        ++this.count;
        console.log(this.count)
    }

    dec() {
        --this.count
        console.log(this.count)
    }
}
