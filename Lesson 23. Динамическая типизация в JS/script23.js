'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) при сложении со строкой получается строка
console.log(typeof((5 + "")));
console.log(typeof((null + "")));

//пример
const num = 5;

console.log("https://vk.cpm/catalog/" + num);
//пример 2
const fontSize = 26 + 'px';


// To Number
   
// 1)
console.log(typeof(Number(null)));
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("hello", ""); // модальное окно
//все что получаем от пользователя - это строки

// To boolean

// null, 0, "", underfind, NaN всегда false

// 1)
let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// 2)

console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"444444"));

