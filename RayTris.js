function addRow(tableID) {
	var tableRef = document.getElementById(tableID);

	for (var i = 0; i <10; i++) {
		var row = document.createElement("tr");
		var cell = document.createElement("td");
	
	var rowRef = document.querySelectorAll("td");

	rowRef.border = "1";
	rowRef.width = "25px";
	rowRef.height = "25px";

addRow("board");

