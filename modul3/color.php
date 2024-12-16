<?php
$rows = 6; // Количество строк
$columns = 2; // Количество столбцов

// Массивы с названиями и кодами цветов
$names = array('Lime', 'Red', 'Tomato', 'Gold', 'Aqua', 'gray');
$colors = array('#00FF00', '#FF0000', '#FF6347', '#FFD700', '#00FFFF', 'gray');

echo '<html><body>'; 
echo '<center><table border="1" style="border-collapse: collapse;">';

for ($i = 0; $i < $rows; $i++) {
    echo '<tr>';
    echo '<td style="padding: 10px;">' . $names[$i] . '</td>';

    echo '<td style="background-color: ' . $colors[$i] . '; width: 100px; height: 30px;"></td>';
    
    echo '</tr>';
}

echo '</table>';
echo '</body></html></center>'; 
?>
