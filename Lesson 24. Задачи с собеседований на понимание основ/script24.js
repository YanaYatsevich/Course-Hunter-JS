"use strict";

// null, 0, "", underfind, NaN всегда false

// 1)
//let x = 5; alert( x++ );

// 2)
// [ ] + false - null + true 
//console.log(typeof([ ] + false)); //"false" - string
//console.log([ ] + false - null + true); // "NaN"

// 3)
//let y = 1; let x = y = 2; alert(x); // "2"

// 4) 
//console.log([ ] + 1 + 2); // "12"

// 5)
// alert( "1"[0]); // "1"

// 6)
// console.log(2 && 1 && null && 0 && undefined); // "null"

// И запинается на лжи
// ИЛИ запинается на правде

// 7)
//console.log(!!( 1 && 2 ) === (1 && 2)); // "false"

// 8)
//                3
//alert( null || 2 && 3 || 4 ); // сравнив 2 И 3 получаем 3
// сравнив null ИЛИ 3 получаем 3
// сравнив 3 ИЛИ 4 получаем 4

// 9)
// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 
// console.log(a ==b);

// 10) alert( +"Infinity" ); 

// 11)
//console.log("Ежик" > "яблоко");

// 12)
console.log(0 || "" || 2 || undefined || true || falsе);