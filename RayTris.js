function addRow(tableID) {
    var tableRef = document.getElementById(tableID);
    var hitRow = Math.floor(Math.random() * 10);

    for (var i = 0; i <10; i++) {
        var newRow = tableRef.insertRow();
        var newCell = newRow.insertCell();
    
        if (i === hitRow) {
            newCell.style.background = "red";
        }
    }
}

window.onload = function() {
    addRow("board");
}
