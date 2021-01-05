'use strict';
let num  = 10;

function showFirstMessage(text) {  //arg, num, fwef
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);


function calc(a, b) {  
    return (a + b);
}

console.log(calc(4, 4));
console.log(calc(7, 9));
console.log(calc(5, 3));

function ret() {
    let num = 50;


    //


    return num;
}


const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
    console.log("Hello!");
};

logger();

const calcu = (a, b) => { return a + b; }; // or const calcu = (a, b) => a + b;  если функция сожержит один аргумент