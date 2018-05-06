$(function () {

    // Select color input
    let color = $('#colorPicker');

    // Select size input
    let h = $('#input_height');
    let w = $('#input_width');

    // select canvas
    const table = $('#pixel_canvas');

    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
        table.find('tbody').remove();

        // "submit" the size form to update the grid size
        let row = h.val();
        let cells = w.val();

        // set tbody to the table
        table.append('<tbody></tbody>');

        let canvas = table.find('tbody');

        // draw grid row
        for (let i = 0; i < row; i++) {
            canvas.append('<tr></tr>');
        }

        // draw grid col
        for (let i = 0; i < cells; i++) {
           table.find('tr').append('<td class="transparent"></td>');
        }

    }


    $(document).ready(function () {
        // click the submit button to update the grid
        $('input[type="submit"]').on('click', function (e) {
            e.preventDefault();
            makeGrid();
        });
    });
});
