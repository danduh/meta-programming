export const log = () => {
    console.log(`[log - 1] Compilation time started`);

    return (target, key, descriptor) => {
        console.log(`[log - 2] Compilation time: evaluation of the decorator`);
        const origin = descriptor.value;

        descriptor.value = (...args) => {
            console.log(`[log - 3] decorated method >${key}< was fired`);
            console.log(`[log - 4] executing method >${key}< with argument ${args.toString()}`);
            const result = origin.apply(this, args);
            console.log(`[log - 5] results of the method >${key}< execution, is ${result}`);
            return result;
        }
    }
};

