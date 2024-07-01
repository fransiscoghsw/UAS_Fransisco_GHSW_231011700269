<?php

include "../koneksi.php";

$id_satuan = $_POST['id_satuan'];
$satuan = $_POST['satuan'];

if (empty($data["error"])) {
    $query = " UPDATE tb_satuan set satuan='$satuan' where id_satuan='$id_satuan'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    $data = 1;
}else {
    $data = "gagal";
}
echo json_encode($data);
?>