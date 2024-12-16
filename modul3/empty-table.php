<?php
function generateTablePage($rows, $columns) {
    echo '<html><head><title>Таблица ' . $rows . 'x' . $columns . '</title>';
    echo '<style>';
    echo 'table { border-collapse: collapse; width: 80%; margin-left: 10%;}';
    echo 'td { border: 2px solid black; padding: 10px; text-align: center; 
            font-size: 24px}';
    echo '</style>';
    echo '</head><body>';
    
    echo '<h1>Таблица ' . $rows . 'x' . $columns . '</h1>';
    
    echo '<table>';
    for ($i = 1; $i <= $rows; $i++) {
        echo '<tr>';
        for ($j = 1; $j <= $columns; $j++) {
            echo '<td>' . $i * $j . '</td>'; 
        }
        echo '</tr>';
    }
    echo '</table>';
    
    echo '</body></html>';
}

echo '<!DOCTYPE html>';
generateTablePage(5, 5);
?>
