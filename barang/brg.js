$(function() {
    $('#tabel').DataTable();
    loadData(); 





    $("#btn_add").click(function() {
    // alert('nyobak tok isok po ora');
    $.ajax({
      url: "barang/modal_add.php",
      type: "get",
      success: function (data) {
        $('#konten').html(data);
        $('#modal_add').modal('show');
        reset();
      }
    })
    e.stopImmediatePropagation();
    return false;
    });

  $("#btn_edit").click(function() {
    // alert('nyobak tok isok po ora');
    var cek = $(".cek:checked");
    if (cek.length == 1) {
      var id = [];
      $(cek).each(function () {
        id.push($(this).val());
        var str_data = "id_brg=" + id;
        $.ajax({
          url: "barang/modal_edit.php",
          type: "get",
          data: str_data,
          success: function (data) {
            $("#konten").html(data);
            $("#modal_edit").modal("show");
          },
        });
      });
    } else {
      alert("pilih satu wae ojok akeh-akeh!!");
    }
  });

  $("#btn_delete").click(function() {
    // alert('nyobak tok isok po ora');
    var cek = $(".cek:checked");
    if (cek.length > 0) {
      var id = [];
      $(cek).each(function () {
        id.push($(this).val());
        var str_data = "id_brg=" + id;
        $.ajax({
          url: "barang/delete.php",
          type: "POST",
          data: str_data,
          success: function (data) {
            if (data == "1") {
              toastr.success("Data berhasil dihapus");
              location.reload(); // Reload page setelah berhasil hapus data
            } else {
              toastr.danger(data);
            }
          },
        });
      });
    } else {
      alert("pilih siji wae jo akeh-akeh");
    }
  });

  function reset() {
    // $('#id_brg').val('');
      $('#nama_brg').val('');
      $('#satuan').val('');
      $('#jenis').val('');
      $('#stok').val('');
      $('#harga').val('');
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $("#btn_simpan").on('click', function (e) {
    // alert('nyobak tok isok po ora');
      var id_brg = $('#id_brg').val();
      var nama_brg = $('#nama_brg').val();
      var jenis = $('#jenis').val();
      var satuan = $('#satuan').val();
      var stok = $('#stok').val();
      var harga = $('#harga').val();

      if (id_brg == '') {
          alert('Id barang wajib diisi !');
      } else if (nama_brg == '') {
          alert('nama barang wajib diisi !');
      } else if (satuan == '') {
          alert('satuan barang wajib diisi !'); 
      } else if (jenis == '') {
          alert('jenis barang wajib diisi !');
      } else if (stok == '') {
          alert('stok barang wajib diisi !');
      } else if (harga == '') {
          alert('harga barang barang wajib diisi !');
      } else {
          var str_data = "id_brg=" + id_brg +
              "&nama_brg=" + nama_brg +
              "&satuan=" + satuan +
              "&jenis=" + jenis +
              "&stok=" + stok +
              "&harga=" + harga;
          $.ajax({
              type: "post",
              url: "barang/add.php",
              dataType: "text",
              data: str_data,
              success: function (data) {
                  if (data == '1') {
                      loadData();
                      $('#modal_add').modal('hide');
                      toastr.success('data barang berhasil disimpan');
                      location.reload(); // Reload page ketika berhasil menambahakan
                    
                  } else {
                      alert(data);
                  }
              },
          });
      }
  });
  
  $("#btn_ubah").on("click", function (e) {
    var id_brg_e = $("#id_brg_e").val();
    var nama_brg_e = $("#nama_brg_e").val();
    var jenis_e = $("#jenis_e").val();
    var satuan_e = $("#satuan_e").val();
    var stok_e = $("#stok_e").val();
    var harga_e = $("#harga_e").val();

    if (id_brg_e == "") {
      alert("id_brg_e wajib diisi abangku!");
    } else if (nama_brg_e == "") {
      alert("nama_brg_e wajib diisi abangku!");
    } else if (jenis_e == "") {
      alert("jenis_e wajib diisi abangku!");
    } else if (satuan_e == "") {
      alert("satuan_e wajib diisi abangku!");
    } else if (stok_e == "") {
      alert("stok_e wajib diisi abangku!");
    } else if (harga_e == "") {
      alert("harga_e wajib diisi abangku!");
    } else {
      var str_data =
        "id_brg=" + id_brg_e +
        "&nama_brg=" + nama_brg_e +
        "&satuan=" + satuan_e +
        "&jenis=" + jenis_e +
        "&stok=" + stok_e +
        "&harga=" + harga_e;
      $.ajax({
        type: "POST",
        url: "barang/edit.php",
        dataType: "text",
        data: str_data,
        success: function (data) {
          if (data == "1") {
            loadData();
            $("#modal_edit").modal("hide");
            toastr.success("data berhasil diubah");
            location.reload(); // Reload the page saat berhasil diganti
          } else {
            toastr.danger(data);
          }
        },
      });
    }
  });
});

function loadData() {
  $.ajax({
      url: "barang/getdata.php",
      type: "get",
      success: function (data) {
        $("#tabel").dataTable().fnClearTable();
        $("#tabel").dataTable().fnDraw();
        $("#tabel").dataTable().fnDestroy();
        $("#tabel tbody").html(data);
        $("#tabel").dataTable({
          lengthMenu: [
            [10, 20, 25, 50, 100, 15, 5, -1],
            ["10", "20", "25", "50", "100", "15", "5", "Show all"],
          ],
          paging: true,
          searching: true,
          ordering: true,
        });
      },
    });
}

function edit_data(a) {
$.ajax({
  url: "barang/modal_edit.php",
  type: "get",
  data: {
    user_id: a,
  },
  success: function (data) {
    $("#konten").html(data);
    $("#modal_edit").modal("show");
  },
});
}

function delete_data(a) {
$.ajax({
  url: "barang/delete.php",
  type: "POST",
  data: {
    user_id: a,
  },
  success: function (data) {
    if (data == "1") {
      toastr.success("data berhasil dihapus");
      location.reload();
    } else {
      toastr.danger(data);
    }
  },
});
}
