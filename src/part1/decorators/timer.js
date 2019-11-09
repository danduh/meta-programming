export const timer = (logger = console.log) => {
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = (...args) => {
            const t1 = Date.now();
            const result = origin.apply(this, args);
            const t2 = Date.now() - t1;
            logger(`Method ${key} was executed in ${t2}ms, arguments: ${args}`);
            return result
        }
    }
};
