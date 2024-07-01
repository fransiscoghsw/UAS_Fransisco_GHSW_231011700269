<?php

session_start();
include "../koneksi.php";

$id_brg = $_POST['id_brg'];
$nama_brg = $_POST['nama_brg'];
$satuan = $_POST['satuan'];
$jenis = $_POST['jenis'];
$stok = $_POST['stok'];
$harga = $_POST['harga'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

// var_dump($satuan);
if (empty($data["error"])) {
    $query = " INSERT into tb_barang set id_brg='$id_brg',nama_brg='$nama_brg',jenis='$jenis',satuan='$satuan',stok_awal='$stok',harga='$harga',input_date='$input_date',updater='$user'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    $data = 1;
}else {
    $data = "gagal";

} 
    

echo json_encode($data);

?>