import { parentPort, workerData } from 'worker_threads';

function runTheFunction(data) {
    const evalFunc = new Function("return " + data.function)
    const result = evalFunc()(...data.args)
    return result
}

parentPort.postMessage(runTheFunction(workerData));



