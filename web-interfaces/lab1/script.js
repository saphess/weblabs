alert("Проверка alert")

let name = prompt("Введите ваше имя:");
if (name !== null) {
    alert(`Привет, ${name}!`);
} else {
    alert("Вы ничего не ввели.");
}

let con = confirm("Выбор кнопки");
if (con) {
    alert("Вы выбрали ОК");
} else {
    alert("Вы выбрали Отмена");
}