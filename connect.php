<?php
$host = "localhost";
$username = "root";
$password = "Saymyname546";
$database = "Tuckshop"; 

$conn = mysqli_connect($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>



