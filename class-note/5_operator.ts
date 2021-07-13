// Operator

// function logMessage(value: any) {
//   console.log(value)
// }
// logMessage('hello');
// logMessage(100);


// Union Type (|)
let john:  string | number | boolean

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString()
  } else if (typeof value === 'string') {
    value.toString()
  } else {
    throw new TypeError('value must be string or number')
  }
  console.log(value);
}
logMessage('hello')
logMessage(100)


interface Developer {
  name: string;
  skill: string;  
}
interface Person {
  name: string;
  age: number;
}

function askSomeone1(someone: Developer | Person) {
  someone.name
  // 인터페이스 두개를 유니온타입으로 연결했을 경우 공통된 속성만 제공
}
askSomeone1({ name: '디벨로퍼', skill: '웹 개발'})
askSomeone1({ name: '캡틴', age: 100})


// Intersection Type (&)
// let seho: string | number | boolean
// let capt: string & number & boolean // never

function askSomeone2(someone: Developer & Person) {
  someone.name
  someone.age
  someone.skill
  // 인터페이스 두개를 유니온타입으로 연결했을 경우 두개의 모든 속성 제공
}
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 32}) // Developer 와 Person의 모든 속성을 사용해야 한다.
// askSomeone2({ name: '캡틴', age: 100}) // Error