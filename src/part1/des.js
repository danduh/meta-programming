import {log} from "./decorators";

let todoObj = {
    summary: 'Write article',
    assigned: 'me',
    deadLine: 1602208000000
};


function timer() {
    return function (target, key, descriptor) {
        const origin = descriptor.value;
        descriptor.value = function (...args) {
            console.log(key, args);
            console.time(key)
            const results = origin.apply(this, args);
            console.timeEnd(key)
            return results
        };

    }
}

class TodoObject {
    constructor({summary, assigned, deadLine}) {
        Object.assign(this, {summary, assigned, deadLine})
    }


    @timer()
    @log()
    timeLeft() {
        return this.deadLine - Date.now();
    }
}


const todo = new TodoObject(todoObj);

console.log(todo.timeLeft('dfadsas'));
console.log(todo.timeLeft());
console.log(todo.timeLeft());
