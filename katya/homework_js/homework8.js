function Cars(options) {
    this.color = options.color;
    this.model = options.model;
    this.year = options.year;
    this.driverOwner = null;
    this.driverList = [];

    this.idInterval = setInterval(function (driver) {
        this.sayAboutDrive(driver);
    }.bind(this),1000);
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
Cars.prototype.checkForSomeoneThere = checkForSomeoneThere;
Cars.prototype.sayAboutCar = sayAboutCar;
Cars.prototype.changeColor = changeColor;
Cars.prototype.stop = stop;
Cars.prototype.sayAboutCar = sayAboutCar;
Cars.prototype.changeColor = changeColor;
Cars.prototype.sayAboutDrive = sayAboutDrive;
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

Cars.prototype.addAcsses = addAcsses;

function sayAboutCar() {
    return ' The model ' + this.model + ' is released ' + this.year + ' and it has color ' + this.color;
}

function changeColor(color) {
    this.color = color;
}

function sayDriver(driver) {
    return 'The driver name is ' + this.name + ' my age is ' + this.age + ' and  I has ' + this.drivingExperience + ' years driving experience.'
}

function sayAboutDrive(driver) {
    return sayDriver() + ' car is drive... ' + this.sayAboutCar();
}

function stop(idInterval) {
    clearInterval(this.idInterval);
}

function checkForSomeoneThere(indexDriver) {

    if (this.driverOwner === null) {
        confirm('There is no owner');
    } else {
        confirm('Driver behind the wheel');
    }
}
function getSitName() {
    return this.voditel && this.voditel.name ? this.voditel.name : -1;
}

function sayDriver() {
    return 'The driver name is ' + this.name + ' she is ' + this.age + ' years old and has ' + this.drivingExperience + ' years driving experience.'
}

function sayAboutDrive(car) {
    console.log(this.sayDriver() + ' Car is drive ' + car.sayAboutCar() + ' .');
}


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

function letGoDrive(driver) {
    if (this.getSitName() === -1) {
        this.voditel = driver;
    } else if (confirm('Уже занято, поменять водителя?')) {
        this.voditel = driver;
    }
}

function go(interval) {
    var driverName = this.getSitName();
    if (driverName === -1) {
        this.letGoDrive(getDriver(prompt('Кого садить ответ 1, 2, 3')));
        if (this.getSitName()  === -1) return;
    }

    inter.call(this, interval);
}

function inter(interval) {
    this.idInterval = setInterval(function () {
        this.voditel.sayAboutDrive(this);
    }.bind(this), interval);
}

function stop() {
    clearInterval(this.idInterval);
}

function getDriver(indexDriver){
    if (!indexDriver) return null;
    indexDriver = +indexDriver;

    if (indexDriver === 1) return driver1;
    if (indexDriver === 2) return driver2;
    if (indexDriver === 3) return driver3;

    return null
}

/*car1.letGoDrive(driver3);*/
/*car1.letGoDrive(driver1);*/
//car1.go(1000);
/*car2.go(500);*/