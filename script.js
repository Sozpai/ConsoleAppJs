"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильком вы посмотррели?", " ");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильком вы посмотррели?", " ");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let question1 = prompt("Один из последних просмотренных фильмов?", "");
    let question2 = prompt("На сколько оцените его?", "");

    // Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
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
    } else {
      i--; // если произошла какая-то ошибка в услловии выше, то отнимается i, из-за чего пользователю приходится отвечать на вопрос еще раз
    }
  }
}
rememberMyFilms();

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let answerToQuestion = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = answerToQuestion; // i-1 для того, чтобы записывать в массив с 0 индекса
  }
}

writeYourGenres();
