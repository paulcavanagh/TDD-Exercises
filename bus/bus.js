'use strict' 

class Bus {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = [];
        this.passengersFares = 0;
    };

    vacancies(){
        return this.capacity - this.passengers.length;
    };

    board(passenger, fare){
        this.passengers.push(passenger);
        this.passengersFares += fare;

    };
    passengerNames(){
        var arr = [];
        this.passengers.forEach(element => {
            arr.push(element.name + ' (' + element.id + ')');
        });
        return arr;
    };

    switchSeats(passengerA, passengerB){
        this.passengers[this.passengers.indexOf(passengerB)] = passengerA;
        this.passengers[this.passengers.indexOf(passengerA)] = passengerB;
    };

    paidFares(){
        return this.passengersFares;
    };
};

module.exports = Bus