let apt = {
    floor: 12,
    number: '12B',
    size: 3400,
    beds: 3.4,
    baths: 2,
    amenities: {}
};

Object.defineProperty(apt, 'floor', {writable: false, configurable: false});
let descriptor = Object.getOwnPropertyDescriptor(apt, 'floor');

Object.defineProperty(apt, 'floor', {value: 12, writable: false, configurable: false});


apt.floor = 10
console.log(descriptor);
/**
 {
       value: 1602280800,
       writable: false,
       enumerable: true,
       configurable: true
   }
 */



function isTestable(value) {

    return function decorator(target) {
        target.prototype.isTestable = value;
    }

}


function readonly(target, key, descriptor) {
    descriptor.writable = false
    return descriptor

}


function deprecator(target, key, descriptor) {
    console.log('Method', key, ' of ', target, 'is deprecated');
    descriptor.writable = false
    return descriptor

}

function logger() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            console.log('Staring -> ', key);
            let result = originalMethod.apply(this, arguments);
            console.log('Done  -> ', key);
            return result
        };
    }
}

function timer() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            console.time(`Method ${key} worked `);
            let result = originalMethod.apply(this, arguments);
            console.timeEnd(`Method ${key} worked `);
            return result
        };
    }
}


function cacheIt() {
    const cache = {};
    return function (target, key, descriptor) {
        const ordinalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let cacheKey = args.join('-');
            if (!cache.hasOwnProperty(cacheKey)) {
                cache[cacheKey] = ordinalMethod.apply(this, arguments);
            }
            return cache[cacheKey];
        }
    }
}


let todoObj = {
    summary: 'Write article about descriptors',
    assigned: 'me',
    deadLine: 1602280800000
};

@isTestable(true)
class TodoObject {
    deadLine = 0;

    constructor(todoObj) {
        Object.assign(this, todoObj);
    }

    @readonly
    timeLeft() {
        return this.deadLine - Date.now()
    }

    // @deprecator
    // @logger()
    // @timer()
    // @cacheIt()
    getPrimes(max) {
        let sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }


}


function hackTimeLeft() {
    return 0
}


let todo = new TodoObject(todoObj);
todo.timeLeft = hackTimeLeft;
console.log(todo.getPrimes(10000).length);
console.log(todo.getPrimes(8000).length);
console.log(todo.getPrimes(10000).length);
console.log(todo.isTestable);
