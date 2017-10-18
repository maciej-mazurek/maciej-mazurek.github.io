
// funkcja kliknij dla wszystkich cyfr i operatorów


document.ramka.addEventListener('click', function (kliknij) {
    if (kliknij.target.className === 'guzik') {

        document.ramka.wyswietlacz.value += kliknij.target.value;

    }
});


// funkcja wyczysc guzik C

function kliknijWyczysc(){

    document.ramka.wyswietlacz.value = "";
}

document.getElementById('wyczysc').onclick = kliknijWyczysc;

// funkcja wyswietl wynik

function kliknijWynik() {
    var wynik = eval(document.ramka.wyswietlacz.value);
    document.ramka.wyswietlacz.value = wynik;
}

document.getElementById('wynik').onclick = kliknijWynik;
