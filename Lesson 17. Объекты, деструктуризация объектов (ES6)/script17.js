'use strict';

// const obj = new Object();  // устаревший вызов объекта

const options = {    //зададим объект 
    name: 'test', // ключ: значение
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red' // в последнем ключе запятая не ставится
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

//Пример
const {border, bg} = options.colors; //деструктуризация 
console.log(border);


//Пример
// console.log(Object.keys(options).length); // выводит массив keys из объекта и определяет его длину

//Пример
// console.log(options["colors"]['border']); //двойные[]дают доступ к объекту находящемуся на уровень ниже от предыдущег

// пример для удаления одного из ключей з объекта
// console.log(options.name);

// delete options.name;

// console.log(options);

//Пример перебора элементов  for in - работает для объектов
// for (let key in options) { //цикл работает столько раз, сколько свойств (ключей) внутри объекта
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }

//Пример перебора элементов  for of - НЕ работает для объектов
// for (let key of options) { 
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);  
// } //код не запустится и выбьет ошибку TypeError: options is not iterable

// Пример 
//Не существует метода, который считает сколько элементов находится внутри объекта
//для этого нам нужно написать код - счетчика элементов внутри объекта
// let counter = 0;
// for (let key in options) { //цикл работает столько раз, сколько свойств (ключей) внутри объекта
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);




