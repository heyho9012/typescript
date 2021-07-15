// type assertion 타입 단언
let a; // type any
a = 20;
a = 'a';
let b = a as string // b type string

// DOM API Control
// <div id="app">hi</div>

let div = document.querySelector('div') as HTMLDivElement;
div.innerText;