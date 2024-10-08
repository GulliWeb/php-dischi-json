<?php 
// Recupero il mio file .json
$dischi = file_get_contents(("../dischi.json")); 
header(("Content-Type: application/json"));
?>