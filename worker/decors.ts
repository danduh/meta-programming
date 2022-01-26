import { Worker } from 'worker_threads';

export const timer = (log?: (...args) => void): MethodDecorator => {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const origin = descriptor.value;
        descriptor.value = (...args) => {
            const t1 = new Date().getTime();
            const results = origin.apply(this, args);
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


export const ToPromise = (log?: (...args) => void) => {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const origin = descriptor.value;
        descriptor.value = (...args): Promise<any> => {
            return new Promise(resolve => {
                const results = origin.apply(this, args);
                resolve(results)
            })
        };
    };
};

export const ToWorker = (log?: (...args) => void) => {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
        const origin = descriptor.value;
        const stringFunc = origin.toString().replace((key), 'function')

        descriptor.value = (...args) => {
            const worker = new Worker('./worker/worker.js', {
                workerData: {
                    function: stringFunc,
                    args: [...args],
                    path: './worker.ts'
                }
            });
            return worker
        };
    };
};



