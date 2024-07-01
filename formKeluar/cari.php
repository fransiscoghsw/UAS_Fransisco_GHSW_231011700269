<?php

include "../koneksi.php";

$id = $_GET['id'];

$arrayKu = array();

$result = mysqli_query($conn, "SELECT a.*, 
COALESCE(SUM(b.jml_keluar),0) AS total_keluar, 
COALESCE(SUM(c.jml_keluar),0) AS total_keluar, 
(a.stok_awal + COALESCE(SUM(b.jml_keluar),0)- COALESCE(SUM(c.jml_keluar),0)) AS stok_saat_ini
FROM tb_barang a 
LEFT JOIN tb_keluar b ON a.id_brg=b.barang_id 
LEFT JOIN tb_keluar c ON id_brg = c.barang_id 
WHERE a.id_brg = '$id' 
GROUP BY a.id_brg");

if (!$result) {
  echo "Error: " . mysqli_error($conn);
  exit;
}

while ($row = mysqli_fetch_assoc($result)) {
  $arrayKu[] = $row;
}
echo json_encode($arrayKu);
mysqli_close($conn);
?>