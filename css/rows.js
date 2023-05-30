function addRows() {
  // Получаем ссылку на таблицу и форму
  var table = document.getElementById("Mytable");
  var form = document.getElementById("myForm");
  
  // Создаем новую строку в таблице и добавляем ячейки
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  
  // Получаем значения из формы и вставляем их в ячейки
  cell1.innerHTML = form.elements["col1"].value;
  cell2.innerHTML = form.elements["col2"].value;
  cell3.innerHTML = form.elements["col3"].value;
  cell4.innerHTML = form.elements["col4"].value;
  
  // Очищаем значения в форме
  form.reset();
}