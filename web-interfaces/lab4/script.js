// Задание 1
function hello1() {
    return "Привет, JavaScript!";
}

let h1 = hello1();
alert(`Задание 1 \n${h1}`);

// Задание 2
function hello2(name) {
    return `Привет, ${name}!`;
}

let h2 = prompt("Задание 2 \nВведите имя");
alert(hello2(h2));

// Задание 3
function mul(m, n) {
    return m * n;
}
let a = Number(prompt("Задание 3 \nВведите число a"));
let b = Number(prompt("Задание 3 \nВведите число b"));
alert(`${a} * ${b} = ${mul(a, b)}`);

// Задание 4
function repeat(str, n = 2) {
    let new_str = "";
    for (i = 0; i < n; i++) {
        new_str += str;
    }
    return new_str;
}
let s = prompt("Задание 4 \nВведите строку");
let n = prompt("Задание 4 \nВведите количество повторений", 2);
alert(repeat(s, n));

// Задание 5
function rgb(r = 0, g = 0, b = 0) {
    return `rgb(${r}, ${g}, ${b})`;
}
let r = prompt("Задание 5 \nВведите R", 0);
let g = prompt("Задание 5 \nВведите G", 0);
let bl = prompt("Задание 5 \nВведите B", 0);
alert(rgb(r, g, bl));

// Задание 6
function avg(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
let numbers = prompt("Задание 6 \nВведите числа через пробел");
numbers = numbers.split(" ");
for (i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
}
alert(avg(numbers));

// Задание 7
function m(a, b) {
    return mul(a, b);
}
a = Number(prompt("Задание 7 \nВведите число a"));
b = Number(prompt("Задание 7 \nВведите число b"));
alert(`Результат работы функции m(${a}, ${b}) =  ${m(a, b)}`);

// Задание 8
function operation(m, n, o) {
    return eval(`${Number(m)}${o}${Number(n)}`);
}
a = prompt("Задание 8 \nВведите число a");
b = prompt("Задание 8 \nВведите число b");
let op = prompt("Задание 8 \nВведите операцию");
alert(`${a} ${op} ${b} = ${operation(a, b, op)}`);

// Задание 9
function F(a) {
    return a;
}

function addN(n) {
    return F(a) + n;
}
n = Number(prompt("Задание 9 \nВведите число n"));
a = Number(prompt("Задание 9 \nВведите число a"));
alert(`Результат работы функции addN(${n}) =  ${addN(n, a)}`);

// Задание 10
function words(n) {
    if (n % 10 == 1 && n != 11) {
        return `${n} товар`;
    }
    else {
        if (n % 10 > 1 && n % 10 < 5 && (n < 10 || n > 20)) {
            return `${n} товара`;
        }
        else {
            return `${n} товаров`;
        }
    }
}
n = Number(prompt("Задание 10 \nВведите количество товаров"));
alert(words(n));
for (i = 0; i < 30; i++) {
    console.log(words(i));
}