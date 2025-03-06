<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        body {
            font-family: Montserrat, sans-serif;
            margin: 0;
            padding: 24px;
            background-color: #f4f4f9;
            color: #333;
        }
        h1 {
            color: #4CAF50;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background: #e8f5e9;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
        }
        /* .no-match {
            color: #999;
        } */
    </style>
</head>
<body>
    <h1>Результаты сравнения файлов</h1>
    
    <?php
    $file1 = "data/file1.txt";
    $file2 = "data/file4.txt";

    if (file_exists($file1) && file_exists($file2)) {
 
        $file1_lines = file($file1);
        $file2_lines = file($file2);

        // Одинаковые строки
        $odinakovie = array_intersect($file1_lines, $file2_lines);

        // Строки первого файла, которых нет во втором
        $only_in_file1 = array_diff($file1_lines, $file2_lines);

        // Символы второго файла, которые входят в первый
        $chars_in_both = array_intersect($file1_lines, $file2_lines);

        echo "<ol>";

        // 1. Одинаковые строки
        echo "<li><strong>Одинаковые строки:</strong>";
        if (!empty($odinakovie)) {
            echo "<ul>";
            foreach ($odinakovie as $line) {
                echo "<li>" . $line . "</li>";
            }
            echo "</ul>";
        } else {
            echo "<p>Нет одинаковых строк.</p>";
        }
        echo "</li>";

        // 2. Строки первого файла, которых нет во втором
        echo "<li><strong>Строки первого файла, не входящие во второй:</strong>";
        if (!empty($only_in_file1)) {
            echo "<ul>";
            foreach ($only_in_file1 as $line) {
                echo "<li>" . $line . "</li>";
            }
            echo "</ul>";
        } else {
            echo "<p>Все строки из первого файла найдены во втором.</p>";
        }
        echo "</li>";

        // 3. Символы второго файла, которые входят в первый
        echo "<li><strong>Символы второго файла, входящие в первый:</strong>";
        if (!empty($chars_in_both)) {
            echo "<ul>";
            foreach ($chars_in_both as $char) {
                echo "<li>" . $char . "</li>";
            }
            echo "</ul>";
        } else {
            echo "<p class='no-match'>Нет общих символов между файлами.</p>";
        }
        echo "</li>";

        echo "</ol>";
    } else {
        echo "<p>Один или оба файла не найдены. Проверьте пути к файлам.</p>";
    }
    ?>
</body>
</html>
