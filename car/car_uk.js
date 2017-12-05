'use strict'

class Car {
    constructor()
    {
        this.gallons = 0;
        this.odometerReading = 0;
        this.miles = [];
    }

    fill(gallons){
        this.gallons += gallons;
    };

    drive(miles){
        this.gallons = miles / this.gallons;
        this.odometerReading += miles;
        this.miles.push(miles + ' miles');

    };

    odometer(){
        return this.odometerReading; 
    };

    trips(){
        return this.miles;
    }
   

};

module.exports = Car;