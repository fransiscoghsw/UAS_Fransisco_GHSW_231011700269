<?php

include "../koneksi.php";

$user_id = $_POST['user_id'];

    $query = " DELETE from tb_user where user_id='$user_id'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    if ($query == true) {
    echo '1';
}else {
    echo  'gagal hapus !';

} 
    

?>