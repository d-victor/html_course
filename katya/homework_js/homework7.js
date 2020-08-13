function Firm(options) {
    this.name = options.name;
    this.activity = options.activity;
    this.workerList = [];
    this.currentIdWorker = 1;

    this.addWorker = function (worker) {
        worker.setId(this.currentIdWorker);
        this.workerList[this.currentIdWorker] = worker;
        this.currentIdWorker++;
    }

    this.removeWorker = function () {
    }

    this.getCountWorkers = function () {
        /* var count = 0;
         this.workerList.forEach(function (worker) {
             if(worker){
                 count++;
             }
         })
          return count;*/

        /* return this.workerList.reduce(function (acc,item,index) {
             console.log(acc);
            return ++acc;
         },0)*/

        /*var i = 0;
        for ( i = 0;i < this.workerList.length -1;i++) {
            console.log(i);
        }
           return i;*/

        /* var count = 0;
        while(count < this.workerList.length -1){
            count++;
        }
        return count;*/

        var count = 0;
        this.workerList.map(function (worker) {
            count++;
        })
        return count;
    }

    this.setAttr = function () {
    }

    this.allWorkersSay = function () {
        this.workerList.forEach(function (worker) {
            worker.say();
        });
    }
}

function Worker(options) {
    this.name = options.name;
    this.age = options.age;
    this.stag = options.stag;
    this.skillList = options.skillList;
    this.say = function () {
        console.log('My name ' + this.name + ' my age is ' + this.age + ' my stag is '+ this.stag + ' my skills: ' + this.skillList.join('; '))
    }
    this.setId = function (id) {
        this.id = id;
    }
}

var nike = new Firm({
    name: 'Nike',
    activity: 'sport',
});

nike.addWorker(new Worker({
    name: 'Olya',
    age: 25,
    stag: 3,
    skillList: ['html', 'css', 'js'],
}));

nike.addWorker(new Worker({
    name: 'Masha',
    age: 28,
    stag: 5,
    skillList: ['html', 'css', 'js', 'git'],
}));

nike.addWorker(new Worker({
    name: 'Dasha',
    age: 30,
    stag: 9,
    skillList: ['html', 'css', 'js', 'php'],
}));

nike.allWorkersSay();
console.log(google,nike.getCountWorkers());

var google = new Firm({
    name: 'Google',
    activity: 'internet',
});

google.addWorker(new Worker({
    name: 'Roman',
    age: 37,
    stag: 10,
    skillList: ['html', 'css', 'js', 'php', 'java']
}));

google.addWorker(new Worker({
    name: 'Vladuslav',
    age: 25,
    stag: 2,
    skillList: ['html', 'css', 'js']
}));

google.addWorker(new Worker({
    name: 'Volodumur',
    age: 45,
    stag: 12,
    skillList: ['html', 'css', 'js', 'java']
}));

google.addWorker(new Worker({
    name: 'Dmutro',
    age: 31,
    stag: 8,
    skillList: ['html', 'css', 'js']
}));

console.log(google.allWorkersSay());
console.log(google.getCountWorkers());

var facebook = new Firm({
    name: 'facebook',
    activity:'social network',
});

facebook.addWorker(new Worker({
    name: 'Olena',
    age: 30,
    stag: 10,
    skillList: ['html', 'css', 'js']
}));

facebook.addWorker(new Worker({
    name: 'Irina',
    age: 39,
    stag: 3,
    skillList: ['html', 'css', 'js']
}));

facebook.addWorker(new Worker({
    name: 'Oleksandr',
    age: 35,
    stag: 5,
    skillList: ['html', 'css', 'js', 'php']
}));

facebook.addWorker(new Worker({
    name: 'Artem',
    age: 31,
    stag: 6,
    skillList: ['html', 'css', 'java']
}));

facebook.addWorker(new Worker({
    name: 'Oleksiy',
    age: 45,
    stag: 20,
    skillList: ['html', 'css', 'js', 'php', 'java', 'python']
}));

console.log(facebook.allWorkersSay());
console.log(facebook.getCountWorkers());

