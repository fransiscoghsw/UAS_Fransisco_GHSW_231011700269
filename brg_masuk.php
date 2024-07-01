<?php include 'partial/header.php'; ?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Barang Masuk</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="../UAS_Fransisco_GHSW_231011700269/index.php">Beranda</a></li>
            <li class="breadcrumb-item active">Data Master</li>
          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>
  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Barang Masuk</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="row">
          <div class="col-6 text-left">
            <label>Dari</label>
          <input type="date" id="start" style="width: 150px; height: 30px; padding-bottom: 7px;">
          <label>Sampai</label>
          <input type="date" id="end" style="width: 150px; height: 30px; padding-bottom: 7px;">
          <button class="btn btn-primary btn-sm" id="btn_filter">Filter Data</button>
          </div>
            <div class="col-6 text-right">
            <div class="form-group">
              <button type="button" class="btn btn-info btn-sm" id="btn_add">Tambah Data</button>
            </div>
            </div>
            </div>

            
            <table id="tabel" class="table table-bordered table-hover">
              <thead>
                <tr>
                <th>No</th>
                  <th>ID Masuk</th>
                  <th>Tanggal Masuk</th>
                  <th>ID Barang</th>
                  <th>Nama Barang</th>
                  <th>Jumlah Masuk</th>   
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
              </table>
          </div>
          <!-- /.card-body -->
          <!-- /.card-body -->
         </div>
         <!-- /.card -->
        </div>
        <!-- /.col -->
       </div>
       <!-- /.row -->
       <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>
<!-- untuk mencari no urut barang -->
<div id="konten"></div>
<?php include 'partial/footer.php';?>
<script src="formMasuk/masuk.js"></script>