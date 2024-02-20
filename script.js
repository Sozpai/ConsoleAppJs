"use strict";

let numberOfFilms = +prompt("Сколько фильком вы посмотррели?", " ");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

for (let i = 0; i < 2; i++) {
  let question1 = prompt("Один из последних просмотренных фильмов?", "");
  let question2 = prompt("На сколько оцените его?", "");

  // 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
  // отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
  // возвращаем пользователя к вопросам опять

  if (
    question1 != null &&
    question2 != null &&
    question1 != "" &&
    question2 != "" &&
    question1.length < 50 // a != null && b != null && a != '' && b != '' && a.length < 50
  ) {
    personalMovieDB.movies[question1] = question2;
    console.log("Thats okay");
  } else {
    console.log("Error");
    i--; // если произошла какая-то ошибка в услловии выше, то отнимается i, из-за чего пользователю приходится отвечать на вопрос еще раз
  }
}

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
