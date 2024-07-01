<?php

session_start();
include "../koneksi.php";

$id_masuk = $_POST['id_masuk'];
$tgl_masuk = $_POST['tgl_masuk'];
$barang_id = $_POST['barang_id'];
$jml_masuk = $_POST['jml'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($data["error"])) {
    $query = " INSERT into tb_masuk set id_masuk='$id_masuk',tgl_masuk='$tgl_masuk',jml_masuk='$jml_masuk',barang_id='$barang_id',input_date='$input_date',updater='$user'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    $data = 1;
}else {
    $data = "gagal";

} 
    

echo json_encode($data);

?>