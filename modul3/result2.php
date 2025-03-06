<?php
function getAlcoholStage($answers)
{
    $score = 0;

    foreach ($answers as $answer) {
        $score += $answer;
    }

    if ($score >= 1 && $score <= 7) {
        return "Ранняя стадия алкоголизма.";
    } elseif ($score >= 8 && $score <= 17) {
        return "Средняя стадия алкоголизма.";
    } elseif ($score >= 18 && $score <= 20) {
        return "Последняя стадия алкоголизма.";
    } else {
        return "Неизвестно.";
    }
}

$alcoholAnswers = [];
for ($i = 1; $i <= 20; $i++) {
    $alcoholAnswers[] = isset($_POST["q$i"]) ? (int)$_POST["q$i"] : 0;
}

$alcoholResult = getAlcoholStage($alcoholAnswers);
?>

<!DOCTYPE html>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    div {
        font-family: Montserrat;
    }
</style>
<html>
<body>
    <div>
    <h1>Результат теста:</h1>
    <h2><?= $alcoholResult ?></h2>

    <a href="index.html">Вернуться на начальную страницу</a>
    </div>
</body>

</html>