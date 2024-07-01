<?php

include "../koneksi.php";

$user_id = $_POST['user_id'];
$username = $_POST['username'];
$password = $_POST['password'];
$status = $_POST['status'];
$creat_date = date('Y-m-d H:i:s');


if (empty($data["error"])) {
    $query = " INSERT into tb_user set user_id='$user_id',username='$username',password='$password',status='$status',creat_date='$creat_date'";
// var_dump($query);die;
    mysqli_query($conn,$query) or die("gagal perintah SQL".mysqli_error($conn));
    $data = 1;
}else {
    $data = "gagal";

} 
    

echo json_encode($data);

?>