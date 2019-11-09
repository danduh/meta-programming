export function readOnly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor
}

export function log(ClassRef) {
    return function (...args) {
        console.log(`Class ${ClassRef.name} got ${args}`)
    }
}


@log
class TodoItem {
    constructor(task, deadLine) {
        this.task = task;
        this.deadLine = deadLine;
    }

    timeLeft() {
    }
}

const descriptor = Object.getOwnPropertyDescriptor(TodoItem, 'timeLeft');
