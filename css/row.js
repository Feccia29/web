function addRow() {
  var table = document.getElementById("Mytable"); // получаем таблицу по ID
  var row = table.insertRow(table.rows.length); // добавляем строку в конец таблицы

  // добавляем пустые ячейки в каждый столбец
  for (var i = 0; i < 4; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = "&nbsp;"; // добавляем неразрывный пробел в ячейку
  }
}