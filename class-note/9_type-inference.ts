// type inference 타입 추론

// 타입 추론 기본 1
let a; // type: any
// 파라미터를 바로 리턴하면 파라미터의 타입으로 리턴 타입이 정의된다
function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// let shoppingItem: Dropdown<string> = {
//   value: 'item',
//   title: 'shopping',
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailDropdown<string> = {
  value: 'item',
  title: 'dropdown',
  description: 'detail',
  tag: 'shopping',
}

// Best Common Type 
let arr = [1, 2, true, 'a']; // (number | boolean | string)[]