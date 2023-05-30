<?php
$user = 'root';
$pass = '';
$db_name = 'antivirus';
$hostname = 'localhost:3307';

/* создать соединение */
$db = new mysqli($hostname, $user, $pass, $db_name) OR DIE("Не могу создать соединение ");
$result = mysqli_query($db,
'SELECT * from program
 ORDER BY program.program_id DESC');
$rows = $result->num_rows;

while($row = mysqli_fetch_assoc($result)) {
   echo $row['program_id'] ,' ' , $row['name'];
   break;
}

$result->close();
?>
