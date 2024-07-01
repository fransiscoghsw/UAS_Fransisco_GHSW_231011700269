<?php

include "../koneksi.php";

$user_id = $_POST['user_id'];
$username = $_POST['username'];
$password = $_POST['password'];
$status = $_POST['status'];
$creat_date = date('Y-m-d H:i:s');


if (empty($data["error"])) {
    $query = " UPDATE tb_user set username='$username',password='$password',status='$status',
    creat_date='$creat_date' where user_id='$user_id'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    $data = 1;
}else {
    $data = "gagal";
} 

echo json_encode($data);

?>