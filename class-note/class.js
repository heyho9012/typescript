// Class (ES6)

class Person {
  // class logic
  constructor(name, age) {
    console.log('생성 되었습니다.')
    this.name = name
    this.age = age
  }
}

let seho = new Person('세호', 30) // 생성 되었습니다.
console.log(seho) // Person {name: '세호', age: 30}