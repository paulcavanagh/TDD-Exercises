function Car(mpg) {
    this.gallons = 0;
    let odometerReading = 0;
    let roadTrips = [];

    this.fill = function (gallons) {
        this.gallons += gallons;
    };

    this.drive = function (miles) {
        this.gallons = miles / this.gallons;
        odometerReading += miles;
        roadTrips.push(miles + ' miles')
    };

    this.odometer = function () {
        return odometerReading;
    };

    this.trips = function () {
        return roadTrips;
    }

}

module.exports = Car;