'use strict';

// 1 способ исп-ть атрибут в HTML --> не рекомендуется

// 2 способ тоже не лучшшее решение
// const btn = document.querySelector('button'), //выбрали 1-ый эл-т
const btn = document.querySelectorAll('button'), //тут исп-тся псевдомассив
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

//при повторном исп-и ф-и применется только вторая
// btn.onclick = function() {
//     alert('Second click');
// };

// 3  способ
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

//получаем инфу о MouseEvent
// btn.addEventListener('mouseenter', (e) => { //исп-ем events внутри коллбэк
//     console.log(e);
// });

//получаем эл-т над которым мовержили действие
// btn.addEventListener('mouseenter', (e) => { //исп-ем events внутри коллбэк
//     console.log(e.target);
// });

//удалим эл-т со страницы
// btn.addEventListener('click', (e) => { //исп-ем events внутри коллбэк
//     console.log(e.target);
//     e.target.remove();
// });

//33 первый раз мы получили ивент и сразу его удалили
// let i = 0;
// const deleteElement = (e) => { 
//    console.log(e.target);
//    i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);



const deleteElement = (e) => { 
   console.log(e.currentTarget);
   console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


//как отменять дефолтные ф-и браузера
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //помещается в начало обработчика событий

    console.log(event.target);
});


//как одну ф-ию навесить на несколько эл-тов
// btn.forEach(item => {
//     item.addEventListener('click', deleteElement);
// });

//опции события
btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); //кнопки сработают лишь раз
});

