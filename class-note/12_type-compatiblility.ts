// type compatibility

// interface
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}

// class
class Person {
  name: string;
}

let developer: Developer;
let person: Person;
// developer = person // Error 
// developer = new Person // Error
// person = developer;


// function
let add = function(a: number) {
  // ...
}
let sum = function(a: number, b:number) {
  // ...
}

// add = sum; // Error
sum = add;

// generic
interface Empty<T> {
  // ..
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2; // Error
// notempty2 = notempty1; // Error

