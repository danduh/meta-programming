declare const document: Document;
export interface ComponentConfig {
    selector: string,
    templateUrl: string,
    styleUrls: string[],
}

export const Component = (conf: ComponentConfig) => {
    return async function (clazz) {
        const elem = document.createElement(conf.selector);
        let tmpl = await fetch(conf.templateUrl).then(str => str.text());
        let _cl = new clazz();

        Object.keys(_cl).forEach(baseClPr => {
            tmpl = tmpl.replace(`{{${baseClPr}}}`, _cl[baseClPr])
        });
        elem.innerHTML = tmpl;
        document.body.appendChild(elem);
        return _cl
    };
};


