'use strict';

const box = document.getElementById('box'), //обращение к id
      btns = document.getElementsByTagName('button'), //обращение к классу
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), //обращение к классу
      oneHeart = wrapper.querySelector('.heart');

// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px;';
//or
// box.style.cssText = `background-color: blue; width: ${num}px;`;

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'orange';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div'); //сохраняет эл-т только внутри JS, на странице его нет
// const text = document.createTextNode('Тут был я'); //эл-т появится на странице

div.classList.add('black');

document.body.append(div); //внутрь body добавляем эл-т div (на страницу)

// document.querySelector('.wrapper').append(div);

// wrapper.prepend(div); //вставляет эл-т div первым в класс wrapper

// hearts[0].before(div); //добавляет эл-т div перед 1ым эл-том heart
// hearts[0].after(div); //добавляет эл-т div после 1го эл-та heart

//устаревшая версия prepend,before,after
// wrapper.insertBefore(div, hearts[0]); //(эл-т, перед каким эл-том нужно вставить)

// circles[0].remove(); //удаляет эл-т со страницы
//устаревшая версия
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]); //заменили 1ое сердце на 1ый кружок
//устаревшие конструкции
// wrapper.replaceChild(circles[0], hearts[0]); //(эл-т НА кот-ый меняют, эл-т кот-ый меняют)


wrapper.append(div);
//устаревшие конструкции
// wrapper.appendChild(div); //эл-т div поместился в конце wrapper

// div.innerHTML = "Hello World";
div.innerHTML = "<h1>Hello World</h1>"; //работает с HTML структурой
// div.textContent = "hello"; // работает только с текстом
// div.textContent = "<h1>hello World</h1>"; //пишется как текст вместе с <h1>

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); //('ключевое слово', 'HTML код') вставляет HTML код на страницу










