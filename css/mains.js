var req=false;
var rows = 0, old_rows = 0;

if(window.XMLHttpRequest)
    req=new XMLHttpRequest();
else
{
    try
    {
        req=new ActiveXObject('Msxml2.XMLHTTP');

    }

    catch (e)
    {
        req=new ActiveXObject('Microsoft.XMLHTTP');
    }
}

if (!req)
    alert('Объект XMLHttpRequest не поддерживается данным браузером');

Load();


window.setInterval(
    function()
    {
        req.open("get", 'ajax.php' , true);
        req.send(null);
    }, 5000);


//FUNCTIONS
function Load()
{
    if (!req)
        return;

    req.onreadystatechange = receive;
    req.open("get", 'ajax.php' , true); // открываем соединение
    req.send(null); // посылаем запрос серверу

}

function receive() // получение данных от сервера
{
    console.log(rows, old_rows);
    console.log(req.responseText);
    if (req.readyState == 4)
        if (req.status == 200)
        {
            rows = parseInt(req.responseText[0], 10) ;

            if (old_rows == 0)
                old_rows = rows;


            console.log(rows, old_rows, req.responseText);
            if (rows > old_rows)
                alert('Была добавлена запись! \n' + req.responseText.slice(2));

            old_rows = rows;
        }

        else
            alert('Ошибка '+ req.status+': \n' + req.statustext);
}
