'use strict';

// let a = 5, // числа(примитивы) передаются по значению
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = { //объекты передаются по ссылке
//     a: 5,
//     b: 1
// };

// const copy = obj; //тут передается ссылка на obj

// copy.a = 10;
// console.log(copy);
// console.log(obj);


//как сделать копию объекта
function copy(mainObj) { //поверхностная копия объекта
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);

// console.log(numbers);


const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); //соединяет два объекта в один

const clone = (Object.assign({}, add));
clone.d = 20;

// console.log(add);
// console.log(clone);

//создадим поверхностную копию массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //метод slice позволяет скопировать oldArray массив

newArray[1] = 'ahahaha';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // ... - позволяет вытащить элементы из верхних массивов 
                                        // и поместит их в массив internet

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

//поверхностная копия массива объекта с пом оператора spread
const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};