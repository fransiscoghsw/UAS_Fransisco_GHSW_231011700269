<?php include'../koneksi.php';
    $query = "SELECT MAX(id_masuk)as kode from tb_masuk";
    $sql = mysqli_query($conn,$query);
    $data=mysqli_fetch_array($sql);
    $kode_masuk = $data['kode'];
    // nilai 1 dan 4 itu ambil dari id masuk dicatabse, nilai 1 untuk hruf B , untuk nilai 4 untuk 0001
    $urutan = (int) substr($kode_masuk, 12, 4);
    $urutan++;

    $huruf = "TM";
    $tgl = date('Ymd');
    $idmasuk = $huruf.'-'.$tgl.'-'.sprintf("%004s",$urutan);
?>
<div class="modal fade" id="modal_add">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Input Barang Masuk</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
      <div class="modal-body">
        <label>ID Masuk</label>
        <input type="text" class="form-control" id="id_masuk" name="id_masuk" value="<?php echo $idmasuk ?>" readonly>
        <label>Tanggal Masuk</label>
        <input type="date" class="form-control" id="tgl_masuk" name="tgl_masuk">
        <label>ID Barang</label>
        <select name="barang_id" id="barang_id" class="form-control select2bs4" style="width: 100%;">
        <?php include'../koneksi.php';
            $query = "SELECT * FROM tb_barang";
            $sql = mysqli_query($conn,$query);
            while ($data=mysqli_fetch_array($sql)) {
              echo "<option value='" . $data['id_brg'] . "'>" . $data['id_brg'] . ' - ' . $data['nama_brg'] . "</option>";
            }
        ?>
        </select>
        <label>Nama Barang</label>
        <input type="text" class="form-control" id="nama_brg" name="nama_brg" readonly>
        <label>Stok Barang</label>
        <input type="text" class="form-control" id="stok" name="stok" readonly>
        <label>Jumlah Masuk</label>
        <input type="number" class="form-control" id="jml" name="jml">
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Tutup</button>
        <button type="button" id="btn_simpan" class="btn btn-primary btn-sm">Simpan Data</button>
      </div>
    </div>
  </div>
</div>
<script src="formMasuk/masuk.js"></script>