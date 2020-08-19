function Cars(options) {
    this.color = options.color;
    this.model = options.model;
    this.year = options.year;
    this.voditel = null;
    this.voditelListAcsses = [];
}

function Driver(options) {
    this.name = options.name;
    this.age = options.age;
    this.drivingExperience = options.drivingExperience;
}
Cars.prototype.letGoDrive = letGoDrive;
Cars.prototype.getSitName = getSitName;
Cars.prototype.go = go;
Cars.prototype.stop = stop;


Cars.prototype.sayAboutCar = sayAboutCar;
Cars.prototype.changeColor = changeColor;


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
Cars.prototype.addAcsses = addAcsses;
car1.addAcsses(driver1);
function addAcsses(diver) {

}



/*console.log(car1.sitDriverOwner(driver3), car1);*/

function sayAboutCar() {
    return ' The model ' + this.model + ' is released ' + this.year + ' and it has color ' + this.color;
}

function changeColor(color) {
    this.color = color;
}

function sitCar(name) {
    return this.name = name;
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

/*var go = sayAboutDrive.bind(car1, driver1, car2, driver2, car3, driver3);*/

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
car1.go(1000);
/*car2.go(500);*/
console.log(car1.getSitName());
