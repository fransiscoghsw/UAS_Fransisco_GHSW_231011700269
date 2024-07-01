<?php

include "../koneksi.php";

$id_brg = $_POST['id_brg'];

$query = "DELETE from tb_barang where id_brg='$id_brg'";
mysqli_query($conn,$query) or die("gagal perintah SQL" . mysqli_error($conn));
if ($query == true) {
    echo '1';
}else{
    echo ' gagal hapus !';
}



?>