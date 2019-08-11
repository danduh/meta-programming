export const Component = (conf: any) => {
    return async function (clazz) {
        var elem = document.createElement(conf.selector);
        elem.addEventListener('click', function (e) {
            alert('Thanks!');
        });
        let tmpl = await fetch('hero.component.html').then(str => str.text());

        let _cl = new clazz()

        Object.keys(_cl).forEach(baseClPr => {
            tmpl = tmpl.replace(`{{${baseClPr}}}`, _cl[baseClPr])
        });
        elem.innerHTML = tmpl;
        document.body.appendChild(elem);
        return _cl
    };
};


