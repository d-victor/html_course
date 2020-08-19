function Cars(options) {
    this.color = options.color;
    this.model = options.model;
    this.year = options.year;
}

function Driver(options) {
    this.name = options.name;
    this.age = options.age;
    this.drivingExperience = options.drivingExperience;
}

Cars.prototype.getSitName = getSitName;
Cars.prototype.sayDriver = sayDriver;
Cars.prototype.sayAboutCar = sayAboutCar;
Cars.prototype.changeColor = changeColor;
Cars.prototype.sitDriverOwner = sitDriverOwner;
Cars.prototype.LetGoDrive = letGoDrive;
Cars.prototype.sayAboutDrive = sayAboutDrive;
Cars.prototype.stopGo = stopGo;
Cars.prototype.setIntervalDrive = setIntervalDrive;
Driver.prototype.sitCar = sitCar;
Driver.prototype.getSitname = getSitName;
Driver.prototype.sayDriver = sayDriver;
Driver.prototype.sayAboutDrive = sayAboutDrive;
Driver.prototype.stopGo = stopGo;

var car1 = new Cars({
    model: 'Volvo',
    color: 'red',
    year: 2017,
});
var car2 = new Cars({
    model: 'Nissan',
    color: 'white',
    year: 2018,
});
var car3 = new Cars({
    model: 'BMW',
    color: 'black',
    year: 2019,
});

var driver1 = new Driver({
    name: 'Olena',
    age: 30,
    drivingExperience: 10,
});
var driver2 = new Driver({
    name: 'Iruna',
    age: 20,
    drivingExperience: 1,
});

var driver3 = new Driver({
    name: 'Mariya',
    age: 34,
    drivingExperience: 10,
});

var driverOwner = [];

function sitDriverOwner(driver) {
    driverOwner.push(driver);
    return driverOwner;
}

console.log(car1.sitDriverOwner(driver3), car1);

function sayAboutCar(driver) {
    return ' The model ' + this.model + ' is released ' + this.year + ' and it has color ' + this.color;
}

function changeColor(color) {
    this.color = color;
}

function sitCar(name) {
    return this.name = name;
}

function getSitName() {
    return name;
}

function sayDriver(driver) {
    return 'The driver name is ' + this.name + ' she is ' + this.age + ' years old and has ' + this.drivingExperience + ' years driving experience.'
}

function sayAboutDrive(driver, car) {
    alert(driver.sayDriver() + ' Car is drive ' + car.sayAboutCar() + ' .');
}

var go = sayAboutDrive.bind(car1, driver1, car2, driver2, car3, driver3);

function setIntervalDrive(go) {
    var interval = setInterval(go, 1000);
    var count = 1;

    while (count < 3) {
        if (count < 3) {
            count++;
            console.log(count)
        } else if (count === 3) {
            stopGo(interval);
        }
    }
}

function stopGo(interval) {
    clearInterval(interval);
}

function letGoDrive(driver, car) {
    if (driverOwner.includes(driver)) {
        return 1;
    } else {
        if (confirm('Sorry!We do not have such a driver. We have: ' + driver.sayDriver() + 'We put someone behind the wheel?')) {
            car1.sitDriverOwner(driver);
        }
    }
    return setIntervalDrive(go);
}

console.log(letGoDrive(driver1, car1));

