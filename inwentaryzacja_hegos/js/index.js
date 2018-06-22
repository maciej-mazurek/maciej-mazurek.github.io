window.onload = function () {

    var formElement = document.getElementById("form"); // definiuje rodzica elementu i przypisuje do zmiennej
    var inputElement = document.getElementById("EAN"); // Definiuje element z którego będzie pobierana wartość i przypisuje do zmiennej
    var outputElement = document.getElementById("textarea"); // Definiuje element do którego będzie importowana pobrana wczesniej wartość i przypisuje ją do zmiennej
    var wordCount = document.getElementById('wordCount'); // Definiuje element do którego będzie przypisywana liczba zcytanych kodów

    formElement.addEventListener("submit", function (e) { // dla rodzica elementu dodajemy zdarzenie, które zapisuje automatycznie dodaną wartośc do pola formularza

        outputElement.innerHTML += inputElement.value + ";1 &#10;"; // do elementu docelowego dopisujemy element, który pobieramy i dodajemy stosowna wartość
        inputElement.value = ""; // czyścimy element, z którego pobierana jest wartość

        //liczenie zczytanych kodów

        var words = outputElement.value.match(/\b[-?(\w+)?]+\b/gi);

        if (words) {
            wordCount.innerHTML = words.length / 2;
        } else {
            wordCount.innerHTML = 0;
        };

        e.preventDefault(); //zapobiega przeładowaniu strony
    });

    // zapisywanie do pliku txt

    $("#btn-save").click(function () { // funkcja klikniecia na guziku
        var text = $("#textarea").val(); //pobiera wartość pola textarea i przypisuje do zmiennej
        var filename = $("#input-fileName").val() // pobiera wartość pola nazwa pliku i przypisuje do zmiennej
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        }); // definiuje możliwość pobrania pliku przez FileSaver.js
        saveAs(blob, filename + ".txt"); // Funkcja HTML5 W3C saveAs() pozwala zapisać plik jako tekstowy z wcześniej zdefiniowaną i przypisaną do zmiennej nazwą

        // okineko SweetAlert

        swal({
            title: '<b>Dobra robota!</b>',
            type: 'info',
            html: 'Plik został zapisany</br></br> ' + '<b>Znajdziesz go w domyślnym folderze pobierania</b>',
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Super!',
        });
    });

    $("#btn-reset").click(function () {

        window.location.reload(true);

    });

}