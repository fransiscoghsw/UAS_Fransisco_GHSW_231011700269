<?php

include "../koneksi.php";

$id_satuan = $_POST['id_satuan'];

    $query = " DELETE from tb_satuan where id_satuan='$id_satuan'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    if ($query == true) {
    echo '1';
}else {
    echo  'gagal hapus !';
}
?>