<?php
$data = include 'data.php';

function displayTable($data) {
    echo '<table border=1>';
    echo '<tr style="background-color: #f0f0f0;">';
    echo '<th>ФИО</th>';
    echo '<th>Возраст</th>';
    echo '<th>Пол</th>';
    echo '<th>Образование</th>';
    echo '</tr>';

    foreach ($data as $row) {
        echo '<tr>';

        // ФИО
        echo '<td>' .$row[0] . '</td>';

        // Возраст (выделяем зеленым, если меньше 25)
        $age = $row[1];
        if ($age < 25){
            echo '<td style="background-color: #d4edda;">' . $row[1] . '</td>';
        }
        else{
            echo '<td>' . $row[1] . '</td>';
        }

        // Пол (разные цвета для мужчины и женщины)
        if ($row[2] === 'мужчина'){$genderColor = '#cce5ff';}
        else {$genderColor = '#f8d7da';}
        echo '<td style="background-color: ' . $genderColor . ';">' . $row[2] . '</td>';

        // Образование (высшее выделяем жирным)
        if ($row[3] === 'высшее') {$educationStyle = 'font-weight: bold;';}
        else{$educationStyle = '';}
        echo '<td style="' . $educationStyle . '">' . $row[3] . '</td>';
        echo '</tr>';
    }
    echo '</table>';
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Отображение данных</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        body {
            font-family: Montserrat;
            margin: 20px;
        }
        table {
            text-align: left;
            margin-left: 10%;
            width: 80%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
        }
        th {
            text-align: center;
        }
    </style>
</head>
<body>
    <center><h1>Данные пользователей</h1></center>
    <?php
    displayTable($data);
    ?>
</body>
</html>
