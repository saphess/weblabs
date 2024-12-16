<?php
    $rows = 10;
    $columns = 10;
    echo '<html><body>'; 
    echo '<center><table border = "3" style="border-collapse: collapse;
        text-align: center; height: 510px; width: 510px;
        font-size: 20px">';
    for ($i = 1; $i <= $rows; $i++){
        echo '<tr>';
        for ($j = 1; $j <= $columns; $j++){
            if ($i == 1 and $j == 1) {
                echo '<td style="background-color: red"></td>';
            }
            else{
                $multi = $i * $j;
                echo '<td>'.$multi.'</td>';
            }
        }
        echo '</tr>';
    } 
    echo '</table></center>';
    echo '</body></html>';
?>