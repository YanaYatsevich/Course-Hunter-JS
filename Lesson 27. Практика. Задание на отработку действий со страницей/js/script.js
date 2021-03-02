/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const promoAdv = document.querySelector('.promo__adv'),
//       promoContent = document.querySelector('.promo__content'),
//       promoGenre = promoContent.getElementsByClassName('promo__genre')[0],
//       promoBg = promoContent.querySelectorAll('.promo__bg'),
//       promoInterectiveItems = promoContent.getElementsByClassName('promo__interactive-item');

// promoAdv.remove();

// promoGenre.innerHTML = "ДРАМА";

// document.body.promoBg.backgroundImage = "../img/bg.jpg";

// promoInterectiveItems[0].remove();
// promoInterectiveItems.add(movieDB.movies);


//решение
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
    //   movieList = document.querySelectorAll('.promo__interactive-list'); //не сработает потому что тут мы получили 
                                                                    //псевдомассив, а в нем мы ничего удалить не можем
      movieList = document.querySelector('.promo__interactive-list'); //тут мы выбираем первый эл-т,поэтому все work



// adv.forEach(item => {
//     item.remove();
// });

adv.forEach(function (item) {
    item.remove();
});

genre.textContent = 'Драма'; //меняет текст через JS

poster.style.backgroundImage = 'url("img/bg.jpg")';  //меняет картинку через JS

movieList.innerHTML = ""; //если оставить пустое поле, то эл-т очистится

movieDB.movies.sort(); //сортирует эл-ты по алфавиту

console.log(poster.innerHTML); //получаем значения э-т HTML
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
}); //когда мы говорим себе что нужно что то перебрать всегда используем callback ф-и

// a = a + 1 // a += 1   одно и то же


