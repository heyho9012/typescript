// Class

class Person {
  private name: string // priviate => class 안에서만 가능
  public age: number
  readonly log: string // readonly => 읽기만 가능 
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}