<?php
include '../koneksi.php';

$query_user = mysqli_query($conn, "SELECT COUNT(*) AS total_user FROM tb_user") or die(mysqli_error($conn));
$query_barang = mysqli_query($conn, "SELECT COUNT(*) AS total_barang FROM tb_barang") or die(mysqli_error($conn));
$query_masuk = mysqli_query($conn, "SELECT COUNT(*) AS total_masuk FROM tb_masuk") or die(mysqli_error($conn));
$query_keluar = mysqli_query($conn, "SELECT COUNT(*) AS total_keluar FROM tb_keluar") or die(mysqli_error($conn));
$barang_masuk = mysqli_query($conn, "SELECT b.nama_brg, COALESCE(SUM(a.jml_masuk),0) AS total_masuk FROM tb_masuk a RIGHT JOIN tb_barang b ON a.barang_id = b.id_brg GROUP BY b.id_brg") or die(mysqli_error($conn));
$barang_keluar = mysqli_query($conn, "SELECT b.nama_brg, COALESCE(SUM(a.jml_keluar),0) AS total_keluar FROM tb_keluar a RIGHT JOIN tb_barang b ON a.barang_id = b.id_brg GROUP BY b.id_brg") or die(mysqli_error($conn));

$data_masuk = array();
while ($row_masuk = mysqli_fetch_assoc($barang_masuk)) {
    $data_masuk[$row_masuk['nama_brg']] = $row_masuk['total_masuk'];
}

$data_keluar = array();
while ($row_keluar = mysqli_fetch_assoc($barang_keluar)) {
    $data_keluar[$row_keluar['nama_brg']] = $row_keluar['total_keluar'];
}


$result_user = mysqli_fetch_assoc($query_user);
$result_barang = mysqli_fetch_assoc($query_barang);
$result_masuk = mysqli_fetch_assoc($query_masuk);
$result_keluar = mysqli_fetch_assoc($query_keluar);

$data = array(
    'total_user' => $result_user['total_user'],
    'total_barang' => $result_barang['total_barang'],
    'total_masuk' => $result_masuk['total_masuk'],
    'total_keluar' => $result_keluar['total_keluar'],
    'data_masuk' => $data_masuk,
    'data_keluar' => $data_keluar
);

echo json_encode($data);
