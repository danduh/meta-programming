import {myConsole} from "./myConsole";
import {log} from "./decorators/log";
import {timer} from "./decorators/timer";
import {cache} from "./decorators/cache";

console.log('-----------------------');
/**
 * #-1  simple examples: LOG, timer, cache etc.
 */
class MyClass {
    constructor() {
    }

    @timer()
    @cache()
    primes(max) {
        let sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.length;
    }
}


const myClass = new MyClass();
console.log(myClass.primes(40000000));
console.log(myClass.primes(30000000));
console.log(myClass.primes(40000000));


/**
 * #-2 Priority:
 */


/**
 * #-3 Order
 * The GAME
 */

const multiply = (factor) => {
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = (...args) => {
            return origin.apply(this, args) * factor;
        }
    }
};

const plus = (factor) => {
    return (target, key, descriptor) => {
        const origin = descriptor.value;
        descriptor.value = (...args) => {
            return origin.apply(this, args) + factor;
        }
    }
};

class OtherClass {

    @multiply(3)
    @plus(1000)
    methodA() {
        return 5
    }

    @plus(1000)
    @multiply(3)
    methodB() {
        return 5
    }
}

const otherClass = new OtherClass();
//
// console.log('methodA -> ', otherClass.methodA());
// console.log('methodB -> ',otherClass.methodB());

/**    methodA                    methodB
 *      3015  [??]               1015 [??]
 *      1015  [??]               3015 [??]
 * */






console.log('-----------------------');
