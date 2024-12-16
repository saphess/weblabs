<?php
    function generateTable($n) {
        $flag = true;
        $i = $n;
        $j = $n;
        echo '<table border=1 style="border-collapse: collapse; width: 500px; height: 500px">';
        while ($i > 0){
            echo "<tr>";
            while($j > 0){
                if ($flag) {
                    echo '<td colspan="'. $n - $i .'"> </td>';
                    $flag = false;
                    $j = $n - $i;
                }
                else {
                    echo '<td rowspan="'. $n - $j .'"> </td>';
                    $flag = true;
                    $i = $n - $j;
                }
            }
            echo "</tr>";
        }
        echo '</table>';
    }

    echo '<!DOCTYPE html>';
    echo "<html><body>";
    echo "<body>";
    generateTable(4);
    echo "</body></html>";
?>