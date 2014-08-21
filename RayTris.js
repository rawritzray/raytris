function addRow(tableID) {
    var tableRef = document.getElementById(tableID);

    for (var i = 0; i <10; i++) {
        var newRow = tableRef.insertRow();
        var newCell = newRow.insertCell();
    }
}

window.onload = function() {
    addRow("board");
}
