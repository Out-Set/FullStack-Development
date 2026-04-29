<?php

$title=$_POST['title1'];
$price=$_POST['price1'];
$author=$_POST['author1'];
$publication=$_POST['publication1'];

echo "$title";
echo "$price";
echo "$author";
echo "$publication";

$con=mysqli_connect('localhost','root');
mysqli_select_db($con,"brm_project");

$q="INSERT INTO bookrecord (title,price,author,publication) VALUES ('$title',$price,'$author','$publication')";
$status=mysqli_query($con,$q);
mysqli_close($con);

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>Book record management</h1>
	<p><?php if($status==1)
				echo "Record inserted";
			 else
			 	echo "Insertion failed !!";
		?>
	</p>
	<h4>Do you want to insert more record<a href="insertForm.html">Click here</a></h4>
</body>
</html>