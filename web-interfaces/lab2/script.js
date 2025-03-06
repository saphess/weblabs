// Задание 1

let div1 = document.createElement('div');

let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";

div1.innerHTML += "<h1>Первое задание</h1>";
div1.innerHTML += `Тип переменной str = ${str}: ${typeof str}<br>`;
div1.innerHTML += `Тип переменной num = ${num}: ${typeof num}<br>`;
div1.innerHTML += `Тип переменной flag = ${flag}: ${typeof flag}<br>`;
div1.innerHTML += `Тип переменной txt = ${txt}: ${typeof txt}<br>`;

document.body.append(div1);

alert(`Задание 1
Тип переменной str = ${str}: ${typeof str}
Тип переменной num = ${num}: ${typeof num}
Тип переменной flag = ${flag}: ${typeof flag}
Тип переменной txt = ${txt}: ${typeof txt}`)

// Задание 2
let div2 = document.createElement('div');

let a1 = 5 - 3;
let a2 = 5 + 3
let a3 = 5 * 3;
let a4 = 5 / 3;

div2.innerHTML += `<h1>Второе задание</h1>`;
div2.innerHTML += `5 - 3 = ${a1}<br>`;
div2.innerHTML += `5 + 3 = ${a2}<br>`;
div2.innerHTML += `5 * 3 = ${a3}<br>`;
div2.innerHTML += `5 / 3 = ${a4}<br>`;

document.body.append(div2);

alert(`Задание 2
    5 - 3 = ${a1}
    5 + 3 = ${a2}
    5 * 3 = ${a3}
    5 / 3 = ${a4}`)

// Задание 3 
let div3 = document.createElement('div');

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

div3.innerHTML += "<h1>Третье задание</h1>";
div3.innerHTML += `5 % 3 = ${a6}<br>`;
div3.innerHTML += `3 % 5 = ${a7}<br>`;
div3.innerHTML += `5 + '3' = ${a8}<br>`;
div3.innerHTML += `'5' - 3 = ${a9}<br>`;
div3.innerHTML += `75 + 'кг' = ${a10}<br>`;

document.body.append(div3);

alert(`Задание 4
    5 % 3 = ${a6}
    3 % 5 = ${a7}
    5 + '3' = ${a8}
    '5' - 3 = ${a9}
    75 + 'кг' = ${a10}`)

// Задание 4
let div4 = document.createElement('div');

let height = 23;
let width = 10;
let s = height * width;

div4.innerHTML += "<h1>Четвертое задание</h1>";
div4.innerHTML += `Площадь равна: ${s}см`;

document.body.append(div4);

alert(`Задание 4
    Площадь равна: ${s}см`)

// Задание 5
let div5 = document.createElement('div');

let heightC = 10;
let dC = 4;
let v = heightC * 3.1415926535 * dC * dC / 4;

div5.innerHTML += "<h1>Пятое задание</h1>";
div5.innerHTML += `Объем равен: ${v}м`;

document.body.append(div5);

alert(`Задание 5
    Объем равен: ${v}м`)

// Задание 6
let div6 = document.createElement('div');

let n = 3;
let m = 4;
let k = Math.pow(n**2 + m**2, 0.5);

div6.innerHTML += "<h1>Шестое задание</h1>";
div6.innerHTML += `Гипотенуза равна: ${k}`;

document.body.append(div6);

alert(`Задание 6
    Гипотенуза равна: ${k}`)

// Задание 7
let div7 = document.createElement('div');

let f1 = 0;
let f2 = 1;
let i = 0;

while (i < 13){
    let temp = f1;
    f1 = temp + f2;
    f2 = temp;

    i++;
}

div7.innerHTML += "<h1>Седьмое задание</h1>";
div7.innerHTML += `12-ый элемент: ${f2}`;

document.body.append(div7);

alert(`Задание 7
    12-ый элемент: ${f2}`)

// Задание 8
let div8 = document.createElement('div');

let S = 2_000_000;
let p = 10;
let years = 5;

let r = p / (12 * 100);
let mes = years * 12;
let A = (S * r * Math.pow(1 + r, mes)) / (Math.pow(1 + r, mes) - 1);
let perepl = A * mes - S;

div8.innerHTML += "<h1>Восьмое задание</h1>";
div8.innerHTML += `Переплата по ипотеке: ${perepl}`;

document.body.append(div8);

alert(`Задание 8
    Переплата по ипотеке: ${perepl}`)