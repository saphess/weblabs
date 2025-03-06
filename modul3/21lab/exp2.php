<?php
// Получаем список файлов в текущей директории
$files = scandir(__DIR__);

// Фильтруем массив, чтобы оставить только файлы (исключая "." и "..")
$files = array_diff($files, array('.', '..'));

// Выводим список файлов
echo "<ul>";
foreach ($files as $file) {
    echo "<li>" . $file . "</li>";
}
echo "</ul>";
?>

