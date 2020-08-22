function Cars(options) {
    this.color = options.color;
    this.model = options.model;
    this.year = options.year;
    this.driverOwner = null;
    this.driverList = [];

}

function Driver(options) {
    this.name = options.name;
    this.age = options.age;
    this.drivingExperience = options.drivingExperience;
}

Cars.prototype.setDriver = setDriver;
Cars.prototype.addOwnerCar = addOwnerCar;
Cars.prototype.addDriverAccess = addDriverAccess;
Cars.prototype.removeOwner = removeOwner;
Cars.prototype.getSitName = getSitName;
Cars.prototype.checkForSomeoneThere = checkForSomeoneThere;
Cars.prototype.sayAboutCar = sayAboutCar;
Cars.prototype.changeColor = changeColor;
Cars.prototype.interval = interval;
Cars.prototype.stop = stop;
Driver.prototype.sayDriver = sayDriver;
Driver.prototype.sayAboutDrive = sayAboutDrive;


var carVolvo = new Cars({
    model: 'Volvo',
    color: 'red',
    year: 2017,
});
var carNissan = new Cars({
    model: 'Nissan',
    color: 'white',
    year: 2018,
});
var carBMW = new Cars({
    model: 'BMW',
    color: 'black',
    year: 2019,
});

var driverElena = new Driver({
    name: 'Elena',
    age: 30,
    drivingExperience: 10,
});
var driverIrina = new Driver({
    name: 'Irina',
    age: 20,
    drivingExperience: 1,
});

var driverMarina = new Driver({
    name: 'Marina',
    age: 34,
    drivingExperience: 10,
});
var driverKarina = new Driver({
    name: 'Karina',
    age: 26,
    drivingExperience: 4,
});
var driverNatalya = new Driver({
    name: 'Natalya',
    age: 24,
    drivingExperience: 6,
});
var driverOleg = new Driver({
    name: 'Oleg',
    age: 31,
    drivingExperience: 3,
});
var driverOleksandr = new Driver({
    name: 'Oleksandr',
    age: 25,
    drivingExperience: 6,
});
var driverRoman = new Driver({
    name: 'Roman',
    age: 30,
    drivingExperience: 10,
});
var driverVadim = new Driver({
    name: 'Vadim',
    age: 38,
    drivingExperience: 1,
});

function sayAboutCar(driver) {
    return ' The model ' + this.model + ' is released ' + this.year + ' and it has color ' + this.color;
}

function changeColor(color) {
    this.color = color;
}

function sayDriver(driver) {
    return 'The driver name is ' + this.name + ' my age is ' + this.age + ' and  I has ' + this.drivingExperience + ' years driving experience.'
}

function sayAboutDrive(car) {
    return this.sayDriver() + ' car is drive... ' + car.sayAboutCar();
}
function interval() {
    this.idInterval = setInterval(function (driver) {
        this.driverOwner.sayAboutDrive(driver);
    }.bind(this),1000);
}

function stop() {
    clearInterval(this.idInterval);
}

function getSitName() {
    return this.driverOwner && this.driverOwner.name ? this.driverOwner.name : -1;
}

function checkForSomeoneThere(index) {

    if (this.driverOwner === null) {
        confirm('There is no owner');
    }else {
        confirm('Driver behind the wheel');
    }
    return this.driverOwner;
}

console.log(carNissan.checkForSomeoneThere(0));

function setDriver(driver) {
    if(driver.name && !this.driverOwner){
        this.driverOwner = driver;
    }

    return this.driverOwner;
}

function addOwnerCar(driver) {
    this.driverList.push(driver);
    return this.driverList;
}

carBMW.addOwnerCar(driverIrina);
carBMW.addOwnerCar(driverMarina);
carBMW.addOwnerCar(driverElena);
carNissan.addOwnerCar(driverKarina);
carNissan.addOwnerCar(driverOleg);
carNissan.addOwnerCar(driverNatalya);
carVolvo.addOwnerCar(driverVadim);
carVolvo.addOwnerCar(driverRoman);
carVolvo.addOwnerCar(driverOleksandr);

function addDriverAccess(driver) {
    if(this.driverList.includes(driver)){
        this.setDriver(driver);
    }else{
        confirm('Access is denied!');
    }

    return driver;
}

function removeOwner(driver){
    for (var i = 0; i < this.driverList.length; i++){
        if(this.driverList[i] === driver)
            delete this.driverList[i];
    }

    return this.driverList;
}

console.log(carVolvo.removeOwner(driverVadim));

