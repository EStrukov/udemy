/* объект
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(options.name);

// delete options.name
//
// console.log(options);

for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key])
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}
*/
/* массивы
const arr = [1, 2, 3, 6, 8];

arr[99] = 0; //добавили в массив "0" с индексом 99
console.log(arr.length); // выведет 100, т.к. длинна массива это индекс последнего элемента +1

arr.pop(); //удаляет последний элемент массива
arr.push(10); //добавляет елемент '10' в конец массива

for (let i = 0; i < arr.length; i++) { //перебор и вывод элементов в консоль
    console.log(arr[i]);
}

for (let value of arr) { //перебор и вывод элементов в консоль for of работает только с массивоподобными
    console.log(value);
}

arr.forEach(function (item, index, array) { // самый частый метод перебора
    console.log(`${index}: ${item} внутри массива ${array}`);
});

const str = prompt('','');
const products = str.split(" ,"); // формирование массива из строк где "" ,"" знак разделителя
console.log(products);
products.sort(); //сортировка в алфавитном
console.log(products.join("; ")); //а тут через join замутили строку с разделителем "; "

const arr = [1, 22, 3, 16, 8];
arr.sort(compareNum);
function compareNum(a, b) { //callback функция для сортировки чисел
    return a - b;
}
*/
/* создание ссылки и копии ОБЪЕКТА
// let a = 5,
//     b = a;
//
// b+=5;
// console.log(b); // 10
// console.log(a); // осталась 5
//
// const obj = {
//     a: 5,
//     b: 1
// };
//
// const copy = obj; // не создает новый объект, а только ССЫЛАЕТСЯ на уже существующий
// copy.a = 10;
// console.log(obj.a); // 10
// console.log(copy.a); //10
//
// function copyF(mainObj){ //функция клонирования объекта, объекты внутри остаются ссылками (поверхностная копия)
//     let objCopy = {};
//
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
//
// const numbers = { //пример клонирования объекта и использованием функции выше
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copyF(numbers);
// newNumbers.a = 10;
//
// console.log(newNumbers);
// console.log(numbers);


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add)); // в объект numbers добавляет объект add

// создадим копию поверхностного объекта
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

const q = {
    one: 1,
    two: 2
};
const newQ = {...q};
*/
/* создание ссылки и копии МАССИВА
const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray; //создание ссылки на старый массив
const newArray = oldArray.slice(); //создает клон
newArray[1] = 'asdasd';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // ... - spread оператор, копирует данные
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};
const num = [2, 5, 7];

log(...num); // варинат передачи массива в функцию весто 3-х агрументов в данном случае

const array = ['a', 'b'];

const newArr = [...array]; // копия массива, не ссылка
newArr[1] = 'f';
console.log(array);
console.log(newArr);
*/
/* основы ООП
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

// const john = {
//     health: 100
// };

Object.setPrototypeOf(john, soldier); // установили прототип от john к солдату, что передает Джону значения из солдата

john.sayHello();

//или создание прототипа сразу
const john = Object.create(soldier); //Джон прототипно наследуется от солдата и имеет доступ к его функциям
*/
/* Динамическая типизация (изменения типа данных)

// to string

//1
console.log(typeof(String(null)));

//2
console.log(typeof(5 + ''));
const num = 5;

console.log("https://vk.com/catalog/" + num);

const fintSize = 26 + 'px';

// to number
//1
console.log(typeof(Number('4')));

//2
console.log(typeof(+'5'));
//3
console.log(typeof(parseInt("15px", 10)));

// to boolean

//false
0, '', null, undefined, NaN

let switcher = null; // неотработает , т.к. null это false
if (switcher) {
    console.log('Working...');
}
    switcher = 1;
if (switcher) {  //после выполнения каких-то функций switcher получил значение, тогда функция отработает
    console.log('Working...');
}

//2
console.log(typeof(Boolean("444444")));

//3 
console.log(typeof(!!"444444")); // два знака отрицания превращаю в булин
*/

/* задчаки на понимание с собесов


let x = 5; alert (x++); // постфиксная форма вернет сразу 5, а потом прибавит. Ответ 5, префиксная вернёт 6

[]+ false - null + true  // []+false вернет строку "false", строка - null даст NaN , последующее действие вернет тоже NaN

let y = 1; let x = y = 2; alert(x);  // x = 2, сраху у присвоится знач 2, потом значение у присврится х

[] + 1 + 2 // пустой массив это строка, в сложние вернёт строку "12" ,""+"1"+"2"

alert("1"[0]) // вернет элемент строки с индексом 0, т.е. 1

alert("1"[1]) // undefined , т.к. в строке нет элемента с индексом 1

2 && 1 && null && 0 && undefined //&& раюотает как сравнение и запинается на лжи , вернёт false, т.к. null (и 0 и undefined) - это false

есть ли разница между !!(a && b) и (a && b) ? // false , !! превращают выражение в булиновое


                3
alert(null || 2 && 3 || 4); // || запинается на правде, результат будет 3, сразу по приоритету отработает && результат 3, потом null || 3 - null это false результат 3, потом 3 || 4 оба правда - вернет первую, итого 3

a = [1,2,3]; b=[1,2,3]; a == b ? //false, массивы никогда не равны, даже с одинаковыми значениями

alert(+"Infinity") //Infinity

"Ёжик">"яблоко" // false

0 || "" || 2 || undefined || true || false  //2 первая правда
*/

