const Flying = (target) => {

    class FlyingWrapperClass extends target {
        constructor() {
            super(...arguments);
        }

        setAltitude(height) {
            this.altitude = height;
            return this
        }

        setFlySpeed(speed) {
            this.flySpeed = speed;
            return this
        }

        getAltitude() {
            return this.altitude;
        }
    }

    Object.defineProperty(FlyingWrapperClass, 'name',
        {writable: true, value: target.name});

    Object.defineProperty(FlyingWrapperClass, 'name',
        {writable: false});

    return FlyingWrapperClass;
};

export default Flying;

@Flying
export class BaseFlying {

}
