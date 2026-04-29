<?php
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,'brm_project');
$q="select * from bookrecord";
$result=mysqli_query($con, $q);
$num=mysqli_num_rows($result);
for ($i=1; $i<=$num; $i++) 
{ 
	$rows=mysqli_fetch_array($result);
	echo $row['book_Id']." ".$row['title']." ".$price['price']." ".$author['author']." ".$publication['publication'];
}
mysqli_close($con);
?>