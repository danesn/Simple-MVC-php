<?php 

// kalau tidak ada session maka jalankan session
if (!session_id()) {
    session_start();
}

require_once '../app/init.php';


$app = new App;


?>