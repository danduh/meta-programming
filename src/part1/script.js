let todoObj = {
    summary: 'Write article about descriptors',
    assigned: 'me',
    deadLine: 1602280800
};


function logger(message) {
    console.log('permissions 1 - runtime init');
    // Should return function
    return function (target, property, descriptor) {
        console.log('permissions 2 - init');

        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('actual method started', message);
            const result = originalMethod.call(this, ...args);
            console.log('actual method ended', message);
            return result + message
        };
        console.log('permissions - 5');
        return descriptor;
    }
}



class TodoTask {
    constructor({summary, assigned, deadline}) {
        this.summary = summary;
        this.deadLine = deadline;
        this.assigned = assigned;
    }


    getSummary() {
        return this.summary
    }

    changeAssignment(assignee) {
        return this.assigned = assignee;
    }

    @logger(' important message')
    calculatePrimes(iterations, multiplier) {
        const primes = [];
        for (let i = 0; i < iterations; i++) {
            let candidate = i * (multiplier * Math.random());
            let isPrime = true;
            for (let c = 2; c <= Math.sqrt(candidate); ++c) {
                if (candidate % c === 0) {
                    // not prime
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(candidate);
            }
        }
        return primes;
    }
}


const todoTask = new TodoTask(todoObj);

todoTask.calculatePrimes(50, 100000000000);
