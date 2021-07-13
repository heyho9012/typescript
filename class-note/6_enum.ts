// Enum

// 숫자형 enum
enum Coffee {
  Hollys, // 0
  Starbuks // 1
}
let myCoffee = Coffee.Hollys
console.log(myCoffee); // 0

// 문자형 enum
enum Shoes {
  Nike = 'nike',
  Adidas = 'adidas'
}
let myShoes = Shoes.Nike
console.log(myShoes); // 'nike'


// 예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  // if (answer === 'yes') {
  //   console.log('정답입니다.');
  // } else if (answer === 'no') {
  //   console.log('오답입니다.');    
  // } else {}
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  } else if (answer === Answer.No) {
    console.log('오답입니다.');    
  } else {}
}
askQuestion(Answer.Yes);

// askQuestion('예스')
// askQuestion('y')
// askQuestion('YES')
