function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);

// 컴파일(coplie): ts파일을 js파일로 변환하는 작업  


// npm i typescript -g
// tsc => typescript compiler

// tsc index.ts

class Student {
  name: string; // type 정의

  constructor (name: string) {
    this.name = name;
  }
}
// =>
// JavaScraipt로 변환 (TypeScript Playground)
// "use strict";
// var Student = (function() {
//   function Student(name) {
//     this.name = name;
//   }
//   return Student;
// })