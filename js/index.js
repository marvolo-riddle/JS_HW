'use strict';
import Student from "./Student.js";

const inna = new Student('Inna', 'Ovcharenko', 2000);
inna.getAge()
inna.present()
inna.present()
inna.present()
inna.present()
inna.present()
inna.setGrade(100)
inna.setGrade(100)
inna.setGrade(100)
inna.setGrade(100)
inna.setGrade(100)
console.log(inna)
console.log(inna.summary())

console.log('------------------------')

const jon = new Student('Jon', 'Snow', 1995);
jon.present()
jon.absent()
jon.present()
jon.absent()
jon.absent()
jon.setGrade(100)
jon.setGrade(100)
jon.setGrade(100)
jon.setGrade(100)
jon.setGrade(90)
console.log(jon)
console.log(jon.summary())

console.log('------------------------')

const stepan = new Student('Stepan', 'Bandera', 1999);
stepan.getAge()
stepan.absent()
stepan.absent()
stepan.absent()
stepan.absent()
stepan.absent()
stepan.setGrade(10)
stepan.setGrade(20)
stepan.setGrade(10)
stepan.setGrade(10)
stepan.setGrade(50)
console.log(stepan)
console.log(stepan.summary())