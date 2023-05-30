<!DOCTYPE html>
<html>
<head>
	<title>Антивирусные программы</title>	
   <meta name="description" content="Сайт об антивирусных программах">  <!--Использование тега meta-->
   <meta http-equiv="content-type" content="text/html; charset=utf-8">
   <meta name="copyright" lang="ru" content="Darya Mezhuretskaya" />
   <meta name="keywords" content="Антивирус, антивирусные программы, вирусы, шпионы">	
   <link rel="stylesheet" href="css/main.css">
   <script src="css/ajax.js"></script>
   <link rel="stylesheet" href="css/index.css">
   <style>
      h1 {
        width: 100%;
        font-family: cursive; 
        color: #800080; 
      }
    </style>  
</head>
<body>
<!--Вид таблицы: Объединение строк и столбцов
    Вид списка: Определений (теги dl, dt, dd)-->
    <!--ШАПКА САЙТА-->
<h1>Антивирусные программы</h1>
<div class="log" align="center">
   <img src="img/label.png" width="150" alt="Логотип" class="label" >
</div>
<h2>Информация об антивирусах</h2>
<hr size="3">
<!--Меню с гиперссылками-->
<h3>Меню:</h3>
  <ul>
        <li><a href="index.html" title="Главная информация об антивирусных программах">Информация об антивирусах</a></li>
        <li><a href="page2.html" title="Методы защиты от вирусов и лжеантивирусы">Методы защиты от вирусов</a></li>
        <li><a href="sources.html" title="Использованные источники информации">Использованные источники</a></li>
        <li><a href="hard_js3.html" title="Основы JavaScript">Основы JavaScript</a></li>
        <li><a href="form.htm">Анкета</a></li>
        <li><a href="bd.php">Таблицы из БД</a></li>
        <li><a href="xml_page.html">Таблицы из xml</a></li>
    </ul>
<hr size="3">

<?php
$user = 'root';
$pass = '';
$db_name = 'antivirus';
$hostname = 'localhost:3307';
/* создать соединение */
$db = new mysqli($hostname, $user, $pass, $db_name) OR DIE("Не могу создать соединение ");
$result = mysqli_query($db, 'SELECT * from program a join vulnerabilities b on b.program_id = a.program_id');?>
<div class="table-container">
        <div class="table-wrapper">
            <table boarder = 2 class="tab">
                <thead>
                    <tr>
                        <th>Название программы</th>
                        <th>Версия</th>
                        <th>Лицензия</th>
                        <th>Дата выпуска</th>
                        <th>Название вируса</th>
                        <th>Описание</th>
                        <th>Уровень угрозы</th>
                        <th>Рекомендации</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($result as $record): ?>
                        <tr>
                            <td><?= $record['name'] ?></td>
                            <td><?= $record['version'] ?></td>
                            <td><?= $record['license'] ?></td>
                            <td><?= $record['date_issue'] ?></td>
                            <td><?= $record['name_v'] ?></td>
                            <td><?= $record['description'] ?></td>
                            <td><?= $record['threat_level'] ?></td>
                            <td><?= $record['recommendations'] ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
        </div>
        <br>
<hr size="3">
	<div align="center" class="footer" onclick="set_window_text()">
      <p style="font-size: 100%; font-family: fantasy; color: #000000 ">2023 &copy; 4031 Межурецкая Дарья. Все права защищены.</p>
	</div>
</body>
</html>
