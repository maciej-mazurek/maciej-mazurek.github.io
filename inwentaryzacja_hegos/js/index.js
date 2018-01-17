window.onload = function(){

    var formElement = document.getElementById("form");  // definiuje rodzica elementu i przypisuje do zmiennej
    var inputElement = document.getElementById("input"); // Definiuje element z którego będzie pobierana wartość i przypisuje do zmiennej
    var outputElement = document.getElementById("textarea"); // Definiuje element do którego będzie importowana pobrana wczesniej wartość i przypisuje ją do zmiennej

    formElement.addEventListener("submit", function (e) { // dla rodzica elementu dodajemy zdarzenie, które zapisuje automatycznie dodaną wartośc do pola formularza

        outputElement.innerHTML += inputElement.value + ";1 &#10;";   // do elementu docelowego dopisujemy element, który pobieramy i dodajemy stosowna wartość
        inputElement.value = "";  // czyścimy element, z którego pobierana jest wartość

       e.preventDefault(); //zapobiega przeładowaniu strony
    });

// zapisywanie do pliku txt

$("#btn-save").click( function() {  // funkcja klikniecia na guziku
  var text = $("#textarea").val(); //pobiera wartość pola textarea i przypisuje do zmiennej
  var filename = $("#input-fileName").val() // pobiera wartość pola nazwa pliku i przypisuje do zmiennej
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"}); // definiuje możliwość pobrania pliku przez FileSaver.js
    saveAs(blob, filename+".txt"); // Funkcja HTML5 W3C saveAs() pozwala zapisać plik jako tekstowy z wcześniej zdefiniowaną i przypisaną do zmiennej nazwą
});
    
}