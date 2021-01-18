'use strict';

const arr = [1, 12, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b ;
}

// arr[99] = 0;
// console.log(arr.length); //свойство length состоит из послденего элемента + 1
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });




//arr.pop(); //удаляет последний эл-т нашего массива
// arr.push(10); //добавляет эл-т в конец массива
// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt("", ""); //ф-я prompt запускается только в браузере
// const products = str.split(", "); //разделяет эл-ты в массиве
// products.sort(); //сортирует эл-ты как строки
// // console.log(products);
// console.log(products.join('; ')); //записывает разделенный эл-ты в строку

