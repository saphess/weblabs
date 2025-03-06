<style>
    body {
    /* color: green; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3em;
    }
</style>

<?php
// $fruits = ["яблоко", "банан", "груша"];
// foreach ($fruits as $fruit) {
//     echo "Фрукт: <t>$fruit</t><br>";
// }

$user = [
    "name" => "Вера",
    "age" => 52,
    "email" => "kuz_ver@vk.ru"
];



$user["age"] = 19;  // Изменение значения
$user["city"] = "Москва 😢";  // Добавление

foreach ($user as $key => $value) {
    echo "$key: $value<br>";
}

?>




