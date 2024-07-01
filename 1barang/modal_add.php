<?php include'../koneksi.php';
    $query = "SELECT MAX(id_brg)as kode from tb_barang";
    $sql = mysqli_query($conn,$query);
    $data=mysqli_fetch_array($sql);
    $kode_brg = $data['kode'];
    // nilai 1 dan 4 itu ambil dari id barang dicatabse, nilai 1 untuk hruf B , untuk nilai 4 untuk 0001
    $urutan = (int) substr($kode_brg,1,4);
    $urutan++;

    $huruf = "B";
    $idBarang = $huruf.sprintf("%004s",$urutan);
?>
<div class="modal fade" id="modal_add">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Input Data Master Barang</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
      </div>
      <div class="modal-body">
        <label>ID Barang</label>
        <input type="text" class="form-control" id="id_brg" name="id_brg" value="<?php echo $idBarang ?>" readonly>
        <label>Nama Barang</label>
        <input type="text" class="form-control" id="nama_brg" name="nama_brg">
        <label>Jenis Barang</label>
        <select nama="jenis" id="jenis" class="form-control">
          <option>ATk</option>
          <option>Minuman</option>
          <option>Makanan</option>
        </select>
        <label>Satuan</label>
        <select name="satuan" id="satuan" class="form-control">
        <?php include'../koneksi.php';
            $query = "SELECT * FROM tb_satuan";
            $sql = mysqli_query($conn,$query);
            while ($data=mysqli_fetch_array($sql)) {
            echo "<option value='".$data['id_satuan']."'>".$data['satuan']."</option>" ;
            }
        ?>
        </select>
        <label>Stok Awal</label>
        <input type="number" class="form-control" id="stok" name="stok">
        <label>Harga</label>
        <input type="number" class="form-control" id="harga" name="harga">
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Tutup</button>
        <button type="button" id="btn_simpan" class="btn btn-primary btn-sm">Simpan Data</button>
      </div>
    </div>
  </div>
</div>
<script src="barang/brg.js"></script>