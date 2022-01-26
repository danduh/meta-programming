import { ToPromise, ToWorker } from "./decors";
import { Worker } from "worker_threads";

export class ComputeClass {
    // @timer()
    @ToPromise()
    countPrimes(num) {
        const r = [],
            t = [];
        let e, f;
        for (e = 2; e <= num; ++e)
            if (!r[e]) for (t.push(e), f = e << 1; f <= num; f += e) r[f] = !0;
        return t.length;
    }

    // @ToPromise()
    countPrimes2(num) {
        const r = [],
            t = [];
        let e, f;
        for (e = 2; e <= num; ++e)
            if (!r[e]) for (t.push(e), f = e << 1; f <= num; f += e) r[f] = !0;
        return t.length;
    }

    @ToWorker()
    countPrimes3(num) {
        const r = [],
            t = [];
        let e, f;
        for (e = 2; e <= num; ++e)
            if (!r[e]) for (t.push(e), f = e << 1; f <= num; f += e) r[f] = !0;
        return t.length;
    }
}

const compute = new ComputeClass()

const workResult = compute.countPrimes3(9000) as unknown as Worker
workResult.on('message', (result) => {
    console.log('C', result);
});
const workResult2 = compute.countPrimes3(9000) as unknown as Worker
workResult2.on('message', (result) => {
    console.log('C', result);
});

const respA = compute.countPrimes(9000000) as unknown as Promise<number>
respA.then(r => console.log('A', r))

console.log('B', compute.countPrimes2(900000))




