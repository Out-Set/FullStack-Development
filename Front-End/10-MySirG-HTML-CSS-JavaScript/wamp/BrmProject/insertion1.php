<?php 

$title=$_POST['title1'];
$price=$_POST['price1'];
$author=$_POST['author1'];
$publication=$_POST['publication1'];

 $mysqli = new mysqli("localhost", "root", "", "brm_project"); 
  
if ($mysqli == false) { 
    die("ERROR: Could not connect. ".$mysqli->connect_error); 
} 
  
$sql = "INSERT INTO bookrecord (title,price,author,publication) VALUES('$title',$price,'$author','$publication') "; 
    if ($mysqli->query($sql) == true) 
{ 
    echo "Records inserted successfully."; 
} 
else
{ 
    echo "ERROR: Could not able to execute $sql. "
           .$mysqli->error; 
} 
  
// Close connection 
$mysqli->close(); 
?> 