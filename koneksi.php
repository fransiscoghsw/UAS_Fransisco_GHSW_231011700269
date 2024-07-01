<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "db_project_web";
  $conn = mysqli_connect($host, $user, $pass, $dbname);
  if (mysqli_connect_error()){
    echo "Koneksi database gagal".mysqli_connect_error();
  }
?>