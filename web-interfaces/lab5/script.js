// Задание 1
var citi1 = {};
citi1.name = "ГородN";
citi1.population = 10_000_000;
alert(`Задание 1\nИмя города - ${citi1.name}\nНаселенность города - ${citi1.population}`);

// Задание 2
var citi2 = {
    name: "ГородM",
    population: 1e6
};
alert(`Задание 2\nИмя города - ${citi2.name}\nНаселенность города - ${citi2.population}`);

// Задание 3
citi1.getName = function () {
    return this.name;
};
citi2.getName = function () {
    return this.name;
};
alert(`Задание 3\nИмя первого города - ${citi1.getName()}, второго - ${citi2.getName()}`);

// Задание 4
citi1.exportStr = function () {
    return `name=${this.name}\npopulation=${this.population}\n`
}
citi2.exportStr = function () {
    return `name=${this.name}\npopulation=${this.population}\n`
}
alert(`Задание 4\n${citi1.exportStr()}`);
alert(`Задание 4\n${citi2.exportStr()}`);

// Задание 5
function getObj(obj) {
    return this;
}
citi1.getCity = function () {
    return getObj.bind(this)().name;
}
citi2.getCity = function () {
    return getObj.bind(this)().name;
}
alert(`Задание 5\nФункция getCity - ${citi1.getCity()}
Функция getCity - ${citi2.getCity()}`);

// Задание 6
var obj = {}
obj.method1 = function () { return this; };
obj.method2 = function () { return this; };
obj.method3 = function () { return "метод3" };
alert(`Задание 6\n${obj.method1().method2().method3()}`);

// Задание 7
let d1 = [45, 78, 10, 3];
d1[7] = 100;
alert(`Задание 7
d1[6] = ${d1[6]}, d1[7] = ${d1[7]}
Массив целиком: ${d1}`);
console.log(d1[6], d1[7], d1);

// Задание 8
let d2 = [45, 78, 10, 3];
let sum2 = 0;
for (let i = 0; i < d2.length; i++) { sum2 += d2[i] }
alert(`Задание 8\nsum2 = ${sum2}`);

// Задание 9
let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum3 = 0;
for (let key in d3) { sum3 += d3[key]; }
alert(`Задание 9\nsum3 = ${sum3}`);

// Задание 10
function my(a, b) { return b - a; }
let d4 = [45, 78, 10, 3];
d4 = d4.sort(my);
alert(`Задание 10\nотсортированный массив - ${d4}`);

// Задание 11
function getArr(arr) {
    let arrStr = "";
    for (i = 0; i < 3; i++) {
        arrStr += arr[i];
        arrStr += "\n";
    }
    return arrStr;
}
d5 = new Array(3);
for (let n = 0; n < 3; n++) {
    d5[n] = new Array(4)
    for (let m = 0; m < 4; m++) { d5[n][m] = 5; }
}

alert(`Задание 11\n${getArr(d5)}`);