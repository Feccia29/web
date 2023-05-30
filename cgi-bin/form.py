import cgi, sys
form = cgi.FieldStorage()        
print("Content¬-type: text/html")

html1 = """
<head>
<meta charset="UTF-8">
</head>
<TITLE>Таблица с анкетой</TITLE>
<H1>Анкета пользователя</H1>
<table border =2> <tr>  <td>Имя поля</td><td>Значение</td>  </tr>
"""

# печать заголовка таблицы
print (html1)


ll = ['Фамилия','Имя','Отчество', 
'Операционная система','Устройство','Потребность']

data = ['','','','','','']
i=0

for field in ll:
    if not field in form:
        data[i] = '(unknown)'
    else:
        if not isinstance(form[field], list):
            data[i] = form[field].value
        else:
            values = [x.value for x in form[field]]
            data[i] = ', '.join(values)
    i+=1



for i in range(6):
   print ('<tr><td> %s </td> <td> %s </td></tr>'% (ll[i], data[i]))
print (' </table>')
#if 'filename' in form and form['filename'].filename:
#print('<tr><td>Фото</td> <td><img src="%s"></td></tr>' % form['filename'].value)

#write to file
file = open('DB.txt', 'a')
for row in data:
    file.write(row + '\n')
file.close()