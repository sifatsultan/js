/****
Functions
****/


function title(topic) {
    var sentence = rowStart+titleStart + topic + titleEnd+rowEnd;
    document.writeln(sentence);
}


function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// pass number of columns and color
function buildCols(cols, color) {
    document.writeln(rowStart);
    var i = 0;
    var alert;

	// setting the color of the columns
    switch (color) {
    case "red":
        alert = "alert alert-danger";
        break;
    case "green":
        alert = "alert alert-success";
        break;
    default:
        alert = "alert alert-success";
    }

    // Create a row of 12/columns...
	// The more number of columns, the smaller the columns	
	var colSize = 12 / cols;
    for (i = 0; i < cols; i++) {
        document.writeln("<div class='col-md-" + colSize + " " + alert + "'><h1 class='page-header text-center' style='font-size: " + 12 / cols + "em'>This is a col of size " + colSize + "</h1></div>");
    }
	
    document.writeln(rowEnd);
}