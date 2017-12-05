var expect = require('chai').expect;
var Car = require('../car_uk');

describe('Car (UK)', function () {

  describe("#fill", function () {
    it("gives the car petrol", function () {
      var car = new Car(10);
      expect(car.gallons).to.equal(0);

      car.fill(5);
      expect(car.gallons).to.equal(5);

      car.fill(6);
      expect(car.gallons).to.equal(11);
    });

    it("stores petrol per instance", function () {
      var car = new Car(10);
      car.fill(5);

      var car2 = new Car(10);
      car2.fill(4);

      expect(car.gallons).to.equal(5);
      expect(car2.gallons).to.equal(4);
    });
  });

  it("uses petrol when driving", function () {
    // formula for how petrol used is miles / mpg
    var car = new Car(10);
    car.fill(10);
    expect(car.gallons).to.equal(10);
    car.drive(50);
    expect(car.gallons).to.equal(5);
  });

  it("increments the odometer when driving", function () {
    var car = new Car(10);
    expect(car.odometer()).to.equal(0);
    car.drive(50);
    expect(car.odometer()).to.equal(50);
    car.drive(25);
    expect(car.odometer()).to.equal(75);
  });

  it("records trips", function () {
    var car = new Car(10);
    expect(car.trips()).to.eql([]);
    car.drive(50);
    expect(car.trips()).to.eql([
      '50 miles'
    ]);
    car.drive(25);
    expect(car.trips()).to.eql([
      '50 miles',
      '25 miles',
    ]);
  });

});