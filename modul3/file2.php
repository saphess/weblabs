<?php

$file1 = 'data/file1.txt';
$file2 = 'data/file2.txt';
$file3 = 'data/file3.txt';

if (file_exists($file1) && file_exists($file2) && file_exists($file3)) {

    $handle1 = fopen($file1, 'r');
    $handle2 = fopen($file2, 'r');
    $handle3 = fopen($file3, 'r');
    
    echo "<h1>Содержимое файлов</h1>";

    if ($handle1 && $handle2 && $handle3) {
        while (($line1 = fgets($handle1)) !== false && 
               ($line2 = fgets($handle2)) !== false && 
               ($line3 = fgets($handle3)) !== false) {
            $line1 = trim($line1);
            $line2 = trim($line2);
            $line3 = trim($line3);

            echo "<p>$line1 <=> $line2 <=> $line3</p>";
        }

        fclose($handle1);
        fclose($handle2);
        fclose($handle3);
    } else {
        echo "Не удалось открыть один или несколько файлов.";
    }
} else {
    echo "Один или несколько файлов не существуют.";
}
?>

<!DOCTYPE html>
<html>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    body {
        font-family: Montserrat;
        margin: 20px;
    }
    p {
        font-size: 18px;
    }
</style>
<body>

</body>
</html>
