'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
  alert("Вы классический зритель");
} else if (numberOfFilms >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

/*
  (numberOfFilms < 10) ? alert("Просмотрено довольно мало фильмов") :
  (numberOfFilms < 30) ? alert("Вы классический зритель"):
  (numberOfFilms > 30) ? alert("Вы киноман") : alert("Произошла ошибка");
*/

1
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done")
  } else {
    console.log("error")
    i--;
  }
}

console.log(personalMovieDB);