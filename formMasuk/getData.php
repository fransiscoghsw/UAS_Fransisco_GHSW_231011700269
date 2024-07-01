<?php

include "../koneksi.php";
$no =1;
$query = mysqli_query($conn,"SELECT * from tb_masuk a inner join tb_barang b on a. barang_id=b.id_brg order by a.tgl_masuk desc") or die(mysqli_error($conn));
while ($result = mysqli_fetch_array($query)){
?>


<tr>
    <td><?php echo $no++;?></td>
    <td><?php echo $result['id_masuk'];?></td>
    <td><?php echo $result['tgl_masuk'];?></td>
    <td><?php echo $result['barang_id'];?></td>
    <td><?php echo $result['nama_brg'];?></td>
    <td><?php echo $result['jml_masuk'];?></td>
    <td><button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['id_masuk'];?>')" 
            value="<?php echo $result['id_masuk'];?>">Edit</button>
    <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['id_masuk'];?>')">Hapus</button>
    </td>
</tr>

<?php } ?>