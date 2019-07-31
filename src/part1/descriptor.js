/**
 * STEP 1
 *
 *
 * Descriptor is a metadata of object property.
 *
 * @type {{summary: string, assigned: string, deadLine: number}}
 */

// Let's create simple object
let todoObj = {
    summary: 'Write article about descriptors',
    assigned: 'me',
    deadLine: 1602280800
};

{
    let descriptor = Object.getOwnPropertyDescriptor(todoObj, 'deadLine');
    console.log('STEP 1 \n', descriptor);
}
// process.exit(0);








// todoObj.deadLine = 9999999999999;
// {
//     let descriptor = Object.getOwnPropertyDescriptor(todoObj, 'deadLine');
//     console.log('STEP 1a \n',descriptor);
// }

// process.exit(0);





/**
 * STEP 3
 *
 *  Let's assume that as part of product definition deadLine can't be changed
 *
 *  (Product Dreams... )
 *
 *  Steps to prevent this?
 *  1) check user permissions in  changeAssignment method
 *  2) or let's use descriptor
 *
 *
 * **/

Object.defineProperty(todoObj, 'deadLine', {writable:false});
todoObj.deadLine = 999999999999;
console.log('todoObj.deadLine =>', todoObj.deadLine);

todoObj.deadLine = 9999999999999;
{
    let descriptor = Object.getOwnPropertyDescriptor(todoObj, 'deadLine');
    console.log('STEP 1b \n',descriptor);
}

process.exit(0);

// Object.defineProperty(todoObj, 'deadLine', {writable: false});
// let descriptor = Object.getOwnPropertyDescriptor(todoObj, 'deadLine');
// console.log(descriptor);
// todoObj.deadLine = 9999999999999;
// console.log('Writeble=false', todoObj.deadLine);

for (let i = 0; i < 100; i++) {

}

for (let key of todoObj) {}

Object.keys(todoObj)

/** can't be changed **/

/** Now let's add 'use strict' **/


/**
 * STEP 4
 *
 * So no we can't change value, but we can revert 'writable' back to be true..
 * let's prevent this too
 * **/

// Object.defineProperty(todoObj, 'deadLine', {writable: true});
// let descriptor2 = Object.getOwnPropertyDescriptor(todoObj, 'deadLine');
// console.log(descriptor2);
// todoObj.deadLine = 9999999999999;
// console.log('Writeble=true', todoObj.deadLine);


/**
 * STEP 5
 *
 * No we want to prevent any option to change it
 */

Object.defineProperty(todoObj, 'deadLine', {writable: false, configurable: false});
let descriptor = Object.getOwnPropertyDescriptor(todoObj, 'deadLine');
console.log(descriptor);

todoObj.deadLine = 9999999999999;
console.log('Writeble=false', todoObj.deadLine);

// Object.defineProperty(todoObj, 'deadLine', {writable: true});
