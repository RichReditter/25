
// class Clock {
//     constructor({template}){
//         this.template = template;
//     }
//     render(){
//         let data = new Date();

//         let hours = data.getHours();
//         if(hours<10) hours = '0' + hours;

//         let minutes = data.getMinutes();
//         if(minutes<10) minutes = '0' + minutes;

//         let seconds = data.getSeconds();
//         if(seconds<10) seconds = '0' + seconds;

//         let output = this.template
//         .replace('h', hours)
//         .replace('m', minutes)
//         .replace('s', seconds);
//         console.log(output)
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
    
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
    
    
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

// 
// 
// 

class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    runs(speed){
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} стоит.`)
    }
}
class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} прячется.`)
    }
    stop(){
        super.stop();
        this.hide()
    }
}
let rabbit = new Rabbit('кролик')

// rabbit.stop()


// 
// 
// 

class Auto{
    constructor(mark,cylinders,power){
        this.mark = mark;
        this.cylinders = cylinders;
        this.power = power;
    }

    specs(){
        console.log(`Марка машины: ${this.mark}. Кол-во цилиндров: ${this.cylinders}. Мощность: ${this.power}.`);
    }
}

class Trucks extends Auto{
    constructor(name,cylinders,power,capacity){
        super(name,cylinders,power);
        this.capacity = capacity;
    }
    specs(){
        super.specs();
        console.log(`Грузоподъемность: ${this.capacity}(kg).`);
    }
}
let auto = new Auto('bmw',300,1000);
let truck = new Trucks('kamaz',1000,3000,5000);
truck.specs();

// 
// 
// 

let add = function(student){
    students.push(student);
}

class Student{
    constructor(firstName, lastName, group, averageMark){
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }
    scholarShip(){
        if(this.averageMark === 5 || this.averageMark > 5){return 100}
        else{return 80};
    }
    
    getScholarShip(){
        console.log(`Имя студента: ${this.firstName}. Его группа: ${this.group}. А стипендия его:  ${this.scholarShip()}\n`);
    };

}

class Aspirant extends Student{
    constructor(firstName, lastName, group, averageMark,work){
        super(firstName,lastName,group,averageMark);
        this.work = work;
    }
    scholarShip(){
        if(this.averageMark === 5){return 200}
        else {return 180};
    }
    getScholarShip(){
        console.log(`Аспиранта зовут: ${this.firstName}, Его группа: ${this.group}. Стипендия этого аспиранта:${this.scholarShip()}\n`);
    }
    
};

let students = [];
let student1 = new Student('Dmitry','Ivanov',224, 5);
let student2 = new Student('Ivan','Ivanov',124, 4);
let student3 = new Student('Ivan','Kozyrev',14, 4);
let student4 = new Student('Vlad','Polienko',94, 5);
let aspirant1 = new Aspirant('Vladimir','Andreevich',84, 5, 5);
let aspirant2 = new Aspirant('Kirill','Semenov',74, 4, 5);
let aspirant3 = new Aspirant('Zhenya','Kozyrev',224, 5, 5);
let aspirant5 = new Aspirant('Ivan','Ivanov',745, 5, 5);
let aspirant4 = new Aspirant('Ivan','Ivanov',1146, 4, 5);


add(student1);
add(student2);
add(student3);
add(student4);
add(aspirant1);
add(aspirant2);
add(aspirant3);
add(aspirant4);
add(aspirant5);

students.forEach( student => {
    student.getScholarShip();
})