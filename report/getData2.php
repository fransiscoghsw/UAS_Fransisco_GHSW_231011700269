<?php
    include '../koneksi.php';

    $query = mysqli_query($conn, "SELECT a.id_brg, a.nama_brg, b.jenis, c.satuan, a.stok_awal, COALESCE(d.jml_masuk, 0) AS jml_masuk, COALESCE(e.jml_keluar, 0) AS jml_keluar, a.stok_awal + COALESCE(d.jml_masuk, 0) - COALESCE(e.jml_keluar, 0) AS actual_stock FROM tb_barang a 
    INNER JOIN tb_jenis b ON a.jenis = b.id_jenis 
    INNER JOIN tb_satuan c ON a.satuan = c.id_satuan 
    LEFT JOIN tb_masuk d ON a.id_brg = d.barang_id
    LEFT JOIN tb_keluar e ON a.id_brg = e.barang_id ORDER BY a.id_brg ASC") or die(mysqli_error($conn));

    $data = array();
    while ($result = mysqli_fetch_assoc($query)) {
        $data[] = $result;
    }

    header('Content-Type: application/json');
    echo json_encode($data);
    ?>