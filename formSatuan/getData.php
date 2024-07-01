<?php

include "../koneksi.php";
$no =1;
$query = mysqli_query($conn,"SELECT * from tb_satuan Order by id_satuan desc") or die(mysqli_error($conn));
while ($result = mysqli_fetch_array($query)){
?>


<tr>
    <td><?php echo $no++;?></td>
    <td><?php echo $result['id_satuan'];?></td>
    <td><?php echo $result['satuan'];?></td>
    <td><button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['id_satuan'];?>')" 
            value="<?php echo $result['id_satuan'];?>">Edit</button>
    <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo 
    $result['id_satuan'];?>')">Hapus</button></td>
</tr>

<?php } ?>