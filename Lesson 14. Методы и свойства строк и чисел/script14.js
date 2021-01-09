'use strict';

const str = "test";
const arr = [1, 2, 4];

//console.log(str[2]);
console.log(str);
//console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

//console.log(fruit.indexOf("fruit")); //ищет начало позиции строки
console.log(fruit.indexOf("q")); //такого символа нет, поэтому выводит -1

const logg = "Hello world";
//!!!в ответе будет вырезанная часть
//console.log(logg.slice(6, 11));  // (начало строки, конец строки"не включительно") , 
 
//console.log(logg.slice(6)); //если на нужно вырезать до какого то момента, то указываем только начало вырезания

//console.log(logg.substring(6, 11)); // не поддерживает отрицательные значения, в остальном копирует функционал slice

console.log(logg.substr(6, 5)); // (начало строки, сколько символов нужно вырезать после)   

const num = 12.2;
console.log(Math.round(num)); //округляет до ближайшего целого в большую сторону

const test = "12.2px";
//console.log(parseInt(test)); //переводит число в другую систему счисления  
//- обрезает строку и округляет до целого числа
console.log(parseFloat(test)); //обрезает строку и округляет до числа с плавающей запятой



