export const cache = () => {
    const localCache = {};
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = (...args) => {
            const cacheKey = key + '##' + args.map(JSON.stringify).join('%%');
            if (!localCache.hasOwnProperty(cacheKey))
                localCache[cacheKey] = origin.apply(this, args);
            return localCache[cacheKey];
        }
    }
};
