import Flying, {BaseFlying} from "./flying";
import RestAPI, {BaseRestAPI} from "./rest-api";
import {mixings} from "./mixings";

console.log('********* t: @danduh81 *********  \n OUTPUT START\n********* t: @danduh81 ********* \n \n');



@mixings(BaseFlying)
export class Car {

    constructor(brand, model, buildYear, color) {
        Object.assign(this,
            {brand, model, buildYear, color})
    }

    getBuildYear() {
        return this.buildYear
    }

}


let myCar = new Car('Nissan', 'X-Trail', 2019, 'black');

myCar.setAltitude(50000).setFlySpeed(400);
console.log(`Altitude is ${myCar.getAltitude()}`);
console.log(`\nYear build ${myCar.getBuildYear()}`);
console.log(myCar);




console.log(' \n \n********* t: @danduh81 *********\nOUTPUT END\n********* t: @danduh81 *********\n')
