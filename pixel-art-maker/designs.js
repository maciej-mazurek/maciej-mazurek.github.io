// Select color input
var color = $("#colorPicker");
// Select size input
var size = $('#sizePicker');

// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {
    var table = $("#pixel_canvas");
    var grid = '';
// Your code goes here!
    // row loop
    for (var i = 0; i < x; i++){
        grid += '<tr class="row">';
     //cell loop
        for (var j = 0; j < y; j++){
            grid += '<td class="cell"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table
    table.innerHTML = grid;
}

function createTable(event) {
    
    event.preventDefault();
    var x = $('#input_height').value;
    var y = $('#input_width').value;
    makeGrid(x, y);
    
};

$("input[type=submit]").onclick(createTable());
    
