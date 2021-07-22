// mapped type

type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}


// for in Loop
// let arr = ['a', 'b', 'c'];
// for (let key in arr) {
//   console.log(`${key}: ${arr[key]}`);
// }