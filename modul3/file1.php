<?php
$fileName = 'data/data1.txt'; 
$elements = [];

if (file_exists($fileName)) {
    $file = fopen($fileName, 'r');
    if ($file) {
        while (($line = fgets($file)) !== false) { 
            $elements[] = trim($line); 
        }
        fclose($file);
    } else {
        echo "Не удалось открыть файл.";
    }
} else {
    echo "Файл не существует.";
}

echo "<pre>";
print_r($elements);
echo "</pre>";
?>
