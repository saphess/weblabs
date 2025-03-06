<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $target_dir = "data/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "Файл ". basename($_FILES["fileToUpload"]["name"]). " был загружен.";
    } else {
        echo "Произошла ошибка при загрузке файла.";
    }
}
?>
