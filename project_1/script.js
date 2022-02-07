'use strict';


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: function () {
    /* аналог коду снизу но с использованием split
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
      if (genres === '' || genres == null) {
          console.log('Вы ввели некоретные данные или не ввели');
          i--;
      } else {
        personalMovieDB.genres[i - 1] = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`)
    });
 */
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (genre === '' || genre == null) {
        console.log('Вы ввели некоретные данные или не ввели');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`)
    });
  },

};


/* аналог detectPersonalLevel
    (personalMovieDB.count < 10) ? alert("Просмотрено довольно мало фильмов") :
    (personalMovieDB.count < 30) ? alert("Вы классический зритель"):
    (personalMovieDB.count > 30) ? alert("Вы киноман") : alert("Произошла ошибка");
  */


/* другой вариант использования функции
function showMyDB() {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB)
  }
}
showMyDB();
*/





