<?php

include "../koneksi.php";

$id_masuk = $_POST['id_masuk'];

$query = "DELETE from tb_masuk where id_masuk='$id_masuk'";
mysqli_query($conn,$query) or die("gagal perintah SQL" . mysqli_error($conn));
if ($query == true) {
    echo '1';
}else{
    echo ' gagal hapus !';
}



?>