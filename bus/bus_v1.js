var Bus = function (capacity) {
    this.capacity = capacity;
    this.passengers = [];

    this.vacancies = function () {
        return this.capacity - this.passengers.length;
    };

    let fares = [];

    this.paidFares = function(){
        return fares.reduce((accumulator, currentValue) => accumulator + currentValue);
    };
    
    this.board = function (obj, fare) {
        this.passengers.push(obj);
        fares.push(fare);

    };

    this.passengerNames = function () {
        var arr = [];
        this.passengers.forEach(element => {
            arr.push(element.name + ' (' + element.id + ')');
        });
        return arr;
    };


    this.switchSeats = function (passengerA, passengerB) {     
        this.passengers[this.passengers.indexOf(passengerB)] = passengerA;
        this.passengers[this.passengers.indexOf(passengerA)] = passengerB;
    };
};



module.exports = Bus