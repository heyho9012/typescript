// generics

// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 10
// logText('hi'); // 'hi'
// logText(true); // true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('hi');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a'); // a.split('') => 반환값 문제
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc'); // 제네릭을 이용해서 호출할 떄 반환값 타입을 string으로 정의
str.split('');
const login = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const objStr: Dropdown<string> = { value: 'abc', selected: false };
const objNum: Dropdown<number> = { value: 10, selected: false };


// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(text => console.log(text));
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}
logTextLength('a');
logTextLength({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('10');
getShoppingItemOption('name');
