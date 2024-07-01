<?php

include "../koneksi.php";
$no =1;
$query = mysqli_query($conn,"SELECT * from tb_user Order by user_id asc") or die(mysqli_error($conn));
while ($result = mysqli_fetch_array($query)){
?>


<tr>
    <td><?php echo $no++;?></td>
    <td><?php echo $result['user_id'];?></td>
    <td><?php echo $result['username'];?></td>
    <td><?php echo $result['password'];?></td>
    <td><?php if ($result['status'] == 1) {echo 'Aktif';}?><?php 
    if ($result['status'] == 2) {echo 'Tidak Aktif';}?>
    </td>
    <td><button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['user_id'];?>')" 
            value="<?php echo $result['user_id'];?>">Edit</button>
    <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['user_id'];?>')">Hapus</button>
    </td>
</tr>

<?php } ?>