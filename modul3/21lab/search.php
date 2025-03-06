<?php
if (isset($_GET['search'])) {
    $search_word = $_GET['search'];
    $directory = dirname(__DIR__);

    $files = scandir($directory);

    $files = array_diff($files, array('.', '..'));

    $result = [];

    foreach ($files as $file) {
        $file_path = $directory . DIRECTORY_SEPARATOR . $file;

        if (is_file($file_path) && pathinfo($file_path, PATHINFO_EXTENSION) == 'html') {
            $content = file_get_contents($file_path);

            if (strpos($content, '<title>' . $search_word . '</title>') !== false) {
                $result[] = $file . " (найдено в заголовке)";
            }

            if (strpos($content, $search_word) !== false) {
                $result[] = $file . " (найдено в теле документа)";
            }
        }
    }

    if (!empty($result)) {
        echo "<h3>Результаты поиска по слову '{$search_word}':</h3>";
        echo "<ul>";
        foreach ($result as $file_result) {
            echo "<li>{$file_result}</li>";
        }
        echo "</ul>";
    } else {
        echo "<h3>Ничего не найдено для слова '{$search_word}'.</h3>";
    }
} else {
    echo "<h3>Введите слово для поиска.</h3>";
}
?>
