
var cellArr = [];
var rowArr = [];
var hitIndex = 0;
var latIndex = 2;


//initial function to create a table on window load.
function addRow(tableID) {
    
    var tableRef = document.getElementById(tableID);

    //loop through Rows
    for (var i = 0; i<10; i++) {
        var newRow = tableRef.insertRow();
        rowArr.push(newRow);
        //loop through cells
        for (var j = 0; j<5; j++) {
            var newCell = newRow.insertCell();
            cellArr.push(newCell);
        }
    }
}

//function to fill cells red.
//1. colors prior row transparent
//2. then colors next row's cell index red.
function hitRow() {
    for (c in rowArr) {
        if (c<5){
            rowArr[hitIndex].cells[c].style.background = "transparent";
        }
    }

    hitIndex = (hitIndex + 1) % 10;
    rowArr[hitIndex].cells[latIndex].style.background = "red";
    
}
//function that moves cells based on key pressed.
//j is left, l is right. range is restricted from 0<=x<=4.
function move(event) {
   var chCode = event.charCode; 
        if (chCode === 106) {
            if (latIndex === 0) {
                latIndex = 0;
            } else {
                latIndex -= 1;
            }
        }
        if (chCode === 108) {
            if(latIndex === 4) {
                latIndex = 4;
            } else {
                latIndex += 1;
            }
        }
}
window.onload = function() {
    addRow("board");
    rowArr.reverse();
}
window.setInterval(hitRow, 1000);
window.onkeypress = move;


