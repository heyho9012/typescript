// type aliases
// 타입 별칭은 확장이 불가능 (가능한 한 인터페이스 사용)
type Person = {
  name: string;
  age: number;
}

let john: Person = {
  name: 'john',
  age: 32,
}

type MyString = string;
let str: MyString = 'hello'

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo) {}