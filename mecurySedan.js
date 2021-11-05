//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

class Mercury extends VehicleModule.Vehicle {git 
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else{
                console.log(this.model + " " + this.make + " " + "does not have enough space to take all passengers");
            };
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("Engine started.");
            // return this.started = true;
        } else {
            console.log("Fuel insufficient.")
            // return this.started = false;
        }
    }
    scheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService == true
            console.log("This " + this.make + " " + this.model + " needs to be serviced.")
            return this.scheduleService;
        }
    }
}