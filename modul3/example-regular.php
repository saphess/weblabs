<?php
echo '<html>';
echo'<body style="font-size: 18px;">';

echo '<h1>preg_match</h1>';
$string = "Привет, мир!";
$pattern = "/мир/";
echo '<font color="green"><br>$string = "Привет, мир!"';
echo '<br>$pattern = "/мир/";</font>';
if (preg_match($pattern, $string)) {
    echo "<br>Совпадение найдено!";
} else {
    echo "Совпадение не найдено!";
}

echo '<h1>preg_match_all()</h1>';

$string = "php, java, css, roblox";
$pattern = "/\b\w+\b/";

echo '<font color="green"><br>$string = "php, java, css, roblox";';
echo '<br>$pattern = "/\b\w+\b/";</font>';

preg_match_all($pattern, $string, $matches);
foreach ($matches[0] as $match) {
    echo "<br>" . $match ;
}

echo '<h1>preg_replace()</h1>';
$string = "Я люблю PHP!";
$pattern = "/PHP/";
$replacement = "ROBLOX";

echo '<font color="green"><br>$string = "Я люблю PHP!";';
echo '<br>$pattern = "/PHP/"';
echo '<br>$replacement = "ROBLOX"</font>';


$new_string = preg_replace($pattern, $replacement, $string);
echo '<br>'. $new_string;

echo '<h1>preg_replace_callback()</h1>';

$string = "10 яблок и 20 бананов.";
$pattern = "/(\d+)/"; 

echo $string .'<br>';

function replace_callback($matches) {
    return $matches[0] * 2;
}

echo '<font color="green"><br>$string = "10 яблок и 20 бананов.";';
echo '<br>$pattern = "/(\d+)/";';
echo '<br>function replace_callback($matches) {';
echo '<br>...return $matches[0] * 2;}</font><br>';

$new_string = preg_replace_callback($pattern, 'replace_callback', $string);
echo '<br>'. $new_string;

echo '<h1>preg_split()</h1>';

$string = "яблоки, бананы, груши, апельсины";
$pattern = "/, /";

echo '<font color="green"><br>$string = "яблоки, бананы, груши, апельсины";';
echo '<br>$pattern = "/, /";</font>';

$array = preg_split($pattern, $string);
foreach ($array as $item) {
    echo '<br>' . $item;
}

echo '<h1>preg_quote()</h1>';
$string = "РЕСПЕКТ!!!==КРУТО==";
echo '<font color="green"><br>$string = "РЕСПЕКТ!!!==КРУТО==";</font>';
$quoted_string = preg_quote($string);
echo '<br>'. $quoted_string;

echo '<h1>preg_grep()</h1>';

$array = ["яблоко", "банан", "груша", "апельсин"];
$pattern = "/а/"; 

echo '<font color="green"><br>$string = "яблоки, бананы, груши, апельсины";';
echo '<br>$pattern = "/а/";</font>';

$result = preg_grep($pattern, $array);
foreach ($result as $fruit) {echo "<br>". $fruit;}

echo '</body>'
?>