
$(function () {
    $("#tabel").DataTable();
    loadData();




    
    $("#btn_add").click(function () {
        // $('#modal_add').modal('show');
        $.ajax({
            url: "formJenis/modal_add.php",
            type: 'GET',
            success: function (data) {
                $('#konten').html(data);
                $('#modal_add').modal('show');
                reset();
            },

        });
        e.stopImmediatePropagation();
        return false;
    })

    function reset() {
        // $('#id_jenis').val('');
        $('#jenis').val('');
    }

    $('#btn_simpan').click(function (e) {
        // alert('nyobak tok isok po ora');
        var id_jenis = $('#id_jenis').val();
        var jenis = $('#jenis').val();

        if (id_jenis == '')
            alert('ID Jenis wajib diisi!')
        else if (jenis == '')
            alert('Jenis wajib diisi!')
        else {
            var str_data = "id_jenis=" + id_jenis + "&jenis=" + jenis
            $.ajax({
                url: "formJenis/add.php",
                type: 'POST',
                dataType:"text",
                data:str_data,
                success: function (data) {
                    if (data == '1') {
                        // alert("Data berhasil disimpan");
                        loadData();
                        $('#modal_add').modal('hide');
                        toastr.success('data berhasil disimpan')
                    }else{
                        alert(data);
                    }
                },

            })
        }

    });
    
    $('#btn_ubah').on('click', function (e) {
        // alert('nyobak tok isok po ora');
        var id_jenis = $('#id_jenis_e').val();
        var jenis = $('#jenis_e').val();

        if (id_jenis == '')
            alert('ID Jenis wajib diisi!')
        else if (jenis == '')
            alert('Jenis wajib diisi!')
        else {
            var str_data = "id_jenis=" + id_jenis + "&jenis=" + jenis;
            $.ajax({
                url: "formJenis/edit.php",
                type: 'POST',
                dataType:"text",
                data:str_data,
                success: function (data) {
                    if (data == '1') {
                        loadData();
                        $('#modal_edit').modal('hide');
                        toastr.success('data berhasil diubah');
                    }else{
                        toastr.success(data);
                    }
                },

            })
        }

    });

});

function loadData() {
    $.ajax({
        url: "formJenis/getData.php",
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
        url: "formJenis/modal_edit.php",
        type: 'get',
        data:{
            id_jenis: a
        },
        success: function (data) {
            $('#konten').html(data);
            $('#modal_edit').modal('show');
        },
    });
}

function delete_data(a) {
    $.ajax({
        url: "formJenis/delete.php",
        type: 'POST',
        data:{
            id_jenis: a
        },
        success: function (data) {
            if (data == '1') {
                toastr.success('data berhasil dihapus');
                loadData();
            }else{
                toastr.success(data);
            }
        },

    });
}
