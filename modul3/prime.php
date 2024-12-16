<?php
function isPrime($number) {
    if ($number <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i == 0) {
            return false;
        }
    }
    return true;
}

$testNumber = 13;
echo '<h1>';
if (isPrime($testNumber)) {
    echo $testNumber . " простое число.";
} else {
    echo $testNumber . " не простое число.";
}
echo '</h1>';
?>
