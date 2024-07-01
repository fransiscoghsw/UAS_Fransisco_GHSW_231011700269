$(function() {
    $('#tabel').DataTable();
    loadData();

    $("#btn_add").click(function() {
        // alert('nyobak tok isok po ora');
        $.ajax({
            url: "formSatuan/modal_add.php",
            type: "get",
            success: function (data) {
              $('#konten').html(data);
              $('#modal_add').modal('show');
              reset();
            },
        })
        e.stopImmediatePropagation();
        return false;
    })
    
    function reset() {
        // $('#id_satuan').val('');
        $('#satuan').val('');
    }
    $("#btn_simpan").on('click', function (e) {
        // alert('nyobak tok isok po ora');
        var id_satuan = $('#id_satuan').val();
        var satuan = $('#satuan').val();
        if (id_satuan == '') {
            alert('Satuan ID wajib diisi !');
        } else if (satuan == '') {
            alert('satuan wajib diisi !'); 
        } else {
            var str_data = "id_satuan=" + id_satuan + "&satuan=" + satuan;
            $.ajax({
                type: "post",
                url: "formSatuan/add.php",
                dataType: "text",
                data: str_data,
                success: function (data) {
                    if (data == '1') {
                        // alert('data berhasil disimpan');
                        $('#modal_add').modal('hide');
                        toastr.success('Data berhasil disimpan');
                        loadData();
                    } else {
                        alert(data);
                    }
                }
            });
        }
    });

    $("#btn_ubah").on("click", function (e) {
         // alert('nyobak tok isok po ora');
         var id_satuan = $("#id_satuan_e").val();
         var satuan = $("#satuan_e").val();

         if (id_satuan == '') {
             alert('user ID wajib diisi !');
         } else if (satuan == '') {
             alert('satuan wajib diisi !'); 
         } else {
             var str_data = "id_satuan=" + id_satuan + "&satuan=" + satuan ;
             $.ajax({
                 type: "post",
                 url: "formSatuan/edit.php",
                 dataType: "text",
                 data: str_data,
                 success: function (data) {
                     if (data == '1') {
                         // alert('data berhasil diubah');
                         loadData();
                         $('#modal_edit').modal('hide');
                         toastr.success('Data berhasil diubah');
                     } else {
                         alert(data);
                     }
                 }
             });
         }
     });
    });

function loadData() {
    $.ajax({
        url: "formSatuan/getdata.php",
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
          url: "formSatuan/modal_edit.php",
          type: "get",
          data: {id_satuan: a,},
          success: function (data) {
            $("#konten").html(data);
            $("#modal_edit").modal('show');
            }
            });
            }

      function delete_data(a) {
        $.ajax({
          url: "formSatuan/delete.php",
          type: "POST",
          data: {id_satuan: a,},
          success: function (data) {
              if (data = '1') {
                  toastr.success('Data berhasil dihapus');
                  loadData();
              }else{
                  toastr.danger(data);
              }
          },
        });
      }