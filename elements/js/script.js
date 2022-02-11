'use strict';
// отбор элементов из DOM (document object model)
//старые методы
const box = document.getElementById('box'); //по ID

console.log(box);

//const buttons = document.getElementsByTagName('button')[1]; // вариант получить только вторую кнопку из коллекции
const buttons = document.getElementsByTagName('button'); //всегда выводит коллекцию, даже если элемент всего 1, для взаимодействия всеравно надо выделить элемент
//console.log(buttons[1]); //или так получить вторую кнопку

const circles = document.getElementsByClassName('circle'); //отбор по клаасу (без точки), тоже коллекция
//console.log(circle);

//современные методы
//const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart'); // может высывать все селекторы (id, class, псевдоклассы, элементы по тэгу)
/*
hearts.forEach(item => console.log(item));
console.log(hearts); //получаем коллекцию Node
*/
const oneHurt = document.querySelector('.heart'); // querySelector отбирает первый элемент
//console.log(oneHurt);


//Действия с элементами


//box.style.backgroundColor = 'blue';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/*
for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'blue';
}
*/

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.append(div); // поместить див с классом блэк в конец боди

//document.querySelector('.wrapper').append(div); //добавит див в элемент с классом wrapper

const wrapper = document.querySelector('.wrapper');
wrapper.append(div);
//wrapper.prepend(div); // добавить в начало
//wrapper.prependChild(div); //устаревший метод

//hearts[0].before(div); // перед первым сердчеком див
//hearts[0].after(div); // после первого чердечка див
//wrapper.insertBefore(div, hearts[0]); //старый метод, поместить див перед хартс0

//circles[0].remove(); //удаляет элемент из документа
//wrapper.removeChild(hearts[1]);//старый метод удаления элемента

//hearts[0].replaceWith(circles[0]); // заменить первое сердечко на первый кружок
//wrapper.replaceChild(circles[0], hearts[0]); //старый метод замены элемента

div.innerHTML = "<h1>Hello world</h1>"; // можно передавать текст или сразу элемменты

//div.textContent = "Hello"; // добавление текста , хороший варинат использования данных от пользователя

//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // перед дивом вставили <h2>Hello</h2>
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); //вставить в начало дива <h2>Hello</h2>
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставить в конец дива <h2>Hello</h2>
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); //вставить <h2>Hello</h2> после дива