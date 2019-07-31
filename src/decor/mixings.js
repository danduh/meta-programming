export function mixings(Klass) {

    return (target) => {

        Object.getOwnPropertyNames(Klass.prototype)
            .forEach((baseClPr) => {

                const prDescr = Object.getOwnPropertyDescriptor(Klass.prototype, baseClPr);

                Object.defineProperty(target.prototype, baseClPr, prDescr);
            });

        return target;
    }

}
