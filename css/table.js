function addTableRow() {
    var table = document.getElementById("main");
    var newRow = table.insertRow();
    var cellsCount = table.rows[0].cells.length;

    var input = [];
    for (let i = 0; i < 4; i++) {
        input[i] = document.getElementById(String(i + 1));
    }
  
    for (let i = 0; i < 4; i++) {
      var newCell = newRow.insertCell();
      newCell.innerHTML = input[i].value;
    }
}
