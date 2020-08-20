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
Cars.prototype.sayAboutCar = sayAboutCar;
Cars.prototype.changeColor = changeColor;
Cars.prototype.sayAboutDrive = sayAboutDrive;
Cars.prototype.stop = stop;

Driver.prototype.sayDriver = sayDriver;

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

function sayAboutDrive(driver) {
    return this.sayDriver() + ' car is drive... ' + this.sayAboutCar();
}

this.idInterval = setInterval(function (driver) {
    this.sayAboutDrive(driver);
}.bind(this),1000);

function stop(interval) {
    clearInterval(interval);
}

function setDriver(driver) {
    console.log(driver, driver.name, this.driverOwner);
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
        confirm('Access is denied! We change the owner? ');
    }

    return driver;
}
function removeOwner(driver){

}

console.log(carVolvo.addDriverAccess(driverOleg));

