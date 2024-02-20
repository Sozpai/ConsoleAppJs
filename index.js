// // const hamburger = 5;
// // const fries = 1;

// // if (hamburger && fries) {
// //     console.log('Я сыт');
// // }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (fries && cola && hamburger === 3) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

//Цикл в цикле

// for (let i = 0; i < 7; i++) {
//     console.log(i);                 // 0   1   2
//     for(let j = 0; j < 3; j++){     // 012 012 012
//         console.log(j)
//     }
// }

let res = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    res += "*";
  }

  res += "\n";
}

console.log(res);

first: for (let i = 0; i < 3; i++) {
  //first это метка
  console.log(`First level: ${i}`);
  // 0   1   2
  for (let j = 0; j < 3; j++) {
    // 012 012 012
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first; //если k равна 2, то возвращаемся к метке first
      console.log(`Third level: ${k}`);
    }
  }
}
