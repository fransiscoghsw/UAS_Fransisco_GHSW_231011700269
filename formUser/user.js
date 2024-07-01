$(function() {
    $('#tabel').DataTable();
    loadData(); 

    $("#btn_add").click(function() {
        // alert('nyobak tok isok po ora');
        $('#modal_add').modal('show');
        reset();
    })   

    function reset() {
        $('#user_id').val('');
        $('#username').val('');
        $('#password').val('');
        $('#status').val('');
    }

    $("#btn_simpan").on('click', function (e) {
        // alert('nyobak tok isok po ora');
        var user_id = $('#user_id').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var status = $('#status').val();

        if (user_id == '') {
            alert('user ID wajib diisi !');
        } else if (username == '') {
            alert('username wajib diisi !'); 
        } else if (password == '') {
            alert('password wajib diisi !');
        } else if (status == '') {
            alert('status wajib diisi !');
        } else {
            var str_data = "user_id=" + user_id +
                "&username=" + username +
                "&password=" + password +
                "&status=" + status;
            $.ajax({
                type: "post",
                url: "formUser/add.php",
                dataType: "text",
                data: str_data,
                success: function (data) {
                    if (data == '1') {
                        // alert('data berhasil disimpan');
                        loadData();
                        $('#modal_add').modal('hide');
                        toastr.success('data berhasil disimpan');
                    } else {
                        alert(data);
                    }
                }
            });
        }
    });

    $("#btn_ubah").on("click", function (e) {
         // alert('nyobak tok isok po ora');
         var user_id = $("#user_id_e").val();
         var username = $("#username_e").val();
         var password = $("#password_e").val();
         var status = $("#status_e").val();

 
         if (user_id == '') {
             alert('user ID wajib diisi !');
         } else if (username == '') {
             alert('username wajib diisi !'); 
         } else if (password == '') {
             alert('password wajib diisi !');
         } else if (status == '') {
             alert('status wajib diisi !');
         } else {
             var str_data = "user_id=" + user_id +
                 "&username=" + username +
                 "&password=" + password +
                 "&status=" + status;
             $.ajax({
                 type: "post",
                 url: "formUser/edit.php",
                 dataType: "text",
                 data: str_data,
                 success: function (data) {
                     if (data == '1') {
                         // alert('data berhasil diubah');
                         loadData();
                         $('#modal_edit').modal('hide');
                         toastr.success('data berhasil diubah');
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
        url: "formUser/getdata.php",
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
          url: "formUser/modal_edit.php",
          type: "get",
          data: {user_id: a,},
          success: function (data) {
            $("#konten").html(data);
            $("#modal_edit").modal("show");
          },
        });
      }

      function delete_data(a) {
        $.ajax({
          url: "formUser/delete.php",
          type: "POST",
          data: {user_id: a,},
          success: function (data) {
              if (data = '1') {
                  toastr.success('data berhasil dihapus');
                  loadData();
              }else{
                  toastr.danger(data);
              }
          },
        });
      }