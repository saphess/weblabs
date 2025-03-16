// Задание 2
let m = 123;
let n = "маленькое";
if (m > 50) {
    n = "большое";
}

alert(`Задание 2
    m = ${m}, значит n = ${n}`);

// Задание 2
var i = 2;
while (i < 9) {
    console.log(i++);
}

alert(`Задание 3
    цикл выполнится 7 раз`)

// Задание 8
console.log("Задание 8")
i = 45;
while (i <= 67) {
    console.log(i);
    i++;
}

// Задание 9
console.log("Задание 9")
i = 45;
while (i <= 670) {
    if (i % 10 != 0) {
        i = i + (10 - (i % 10))
    }
    console.log(i);
    i = i + 10;
}

// Задание 10.1
console.log("Задание 10.1")
for (i = 45; i <= 67; i++) {
    console.log(i);
}

// Задание 10.2
console.log("Задание 10.2")
for (i = 45; i <= 670; i += 10) {
    if (i % 10 != 0) {
        i = i + (10 - (i % 10))
    }
    console.log(i);
}

// Задание 11
console.log("Задание 11")
n = prompt("Выберите цифру от 0 до 9");
switch (n) {
    case "0":
        alert("zero");
        break;
    case "1":
        alert("I");
        break;
    case "2":
        alert("II");
        break;
    case "3":
        alert("III");
        break;
    case "4":
        alert("IV");
        break;
    case "5":
        alert("V");
        break;
    case "6":
        alert("VI");
        break;
    case "7":
        alert("VII");
        break;
    case "8":
        alert("VIII");
        break;
    default:
        alert("Нет такого варианта");
        break;
}

// Задание 16
const imagePath = "image.jpg"
document.write("Задание 16 <br>")
for (i = 0; i < 10; i++) {
    document.write(`
        <img src = ${imagePath}>`);
}
document.write("<br>");

// Задание 17
let size = Number(prompt("Введите количество"));
let unit = prompt("Введите размерность");
console.log("Задание 17")
switch (unit) {
    case "Кб":
        size *= 1024;
        alert(`Размер равен ${size} байт`);
        break;
    case "Мб":
        size *= 1024 * 1024;
        alert(`Размер равен ${size} байт`);
        break;
    case "Гб":
        size *= 1024 * 1024 * 1024;
        alert(`Размер равен ${size} байт`);
        break;
    default:
        alert("Нет такого варианта");
        break;
}
