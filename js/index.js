'use strict';

import Person from "./Person.js";
import Apartment from "./Apartment.js";
import Build from "./Build.js";


//экземпляры людей
const person1 = new Person('Jennie', 'male');
const person2 = new Person('Sara', 'female');
const person3 = new Person('Geralt', 'male');
const person4 = new Person('Jon', 'male');
const person5 = new Person('Jane', 'female');
const person6 = new Person('Gorat', 'male');

//экземпляры квартир
const ap111 = new Apartment();
const ap222 = new Apartment();
const ap333 = new Apartment();

//заполнение квартир
ap111.addResident(person1);
ap111.addResident(person2);

ap222.addResident(person3);
ap222.addResident(person4);

ap333.addResident(person5);
ap333.addResident(person6);


//заполнение дома
const cador48 = new Build(10);
cador48.addApartment(ap111);
cador48.addApartment(ap222);
cador48.addApartment(ap333);


console.log(cador48.apartments)

