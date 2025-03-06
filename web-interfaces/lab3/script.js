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
n = 3;
switch (n) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII")
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
let size = 120;
let unit = "Кб";
console.log("Задание 17")
switch (unit) {
    case "Кб":
        size *= 1024;
        console.log(`Размер равен ${size} байт`);
        break;
    case "Мб":
        size *= 1024 * 1024;
        console.log(`Размер равен ${size} байт`);
        break;
    case "Гб":
        size *= 1024 * 1024 * 1024;
        console.log(`Размер равен ${size} байт`);
        break;
}
