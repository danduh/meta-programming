export const cacheIt: () => MethodDecorator = () => {
    const cache = {};
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const ordinalMethod = descriptor.value;
        descriptor.value = (...args) => {
            let cacheKey = args.join("-");
            if (!cache.hasOwnProperty(cacheKey)) {
                cache[cacheKey] = ordinalMethod.apply(this, args);
            }
            return cache[cacheKey];
        };
    };
};

export const timer = (log?: (...args) => void): MethodDecorator => {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const origin = descriptor.value;
        descriptor.value = async (...args) => {
            const t1 = new Date().getTime();
            const results = await origin.apply(this, args);
            const t2 = new Date().getTime();
            const msg = `Time execution for method ${key.toString()} is ${t2 - t1}ms`;
            if (typeof log === "function") {
                log(msg);
            } else {
                console.log(msg);
            }
            return results;
        };
    };
};
