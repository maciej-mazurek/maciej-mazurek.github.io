//Function reloading data

$.getJSON('https://blockchain.info/pl/ticker', function (data) {
 
    $('#buy').html(data.PLN.buy);
        $('#sell').html(data.PLN.sell);
});



function startRefresh() {
    $.getJSON('https://blockchain.info/pl/ticker', function (data) {

        var sell = document.getElementById('sell');
        var buy = document.getElementById('buy');

        console.log('reload');

        var side;

        // Adding fontAsome        

        if ((data.PLN.buy) > buy.innerHTML) {
            side = $('p.arrow').html('<i class="fa fa-long-arrow-up" aria-hidden="true"></i>');

        } else if ((data.PLN.buy) == buy.innerHTML)

        {
            side = $('p.arrow').html('<i class="fa fa-minus" aria-hidden="true"></i>');


        } else {
            side = $('p.arrow').html('<i class="fa fa-long-arrow-down" aria-hidden="true"></i>');

        }

        // diplaying value
        
        $('#buy').html(data.PLN.buy);
        $('#sell').html(data.PLN.sell);
        
        return side;

    });


};

//running function

setTimer = setInterval(startRefresh, 5000);

//changing p#timer string depends on button click

$("form").click(function (getTimer) {
    if (getTimer.target.className === 'button') {

        $("p#timer").empty();

        var timer = $("p#timer").append("Odświeżanie kursu co " + getTimer.target.value);

    }
    return timer
});


// click event for different interval time

$("input#btn5").click(function () {
    clearInterval(setTimer);
    setTimer = setInterval(startRefresh, 5000);

});

$("input#btn10").click(function () {
    clearInterval(setTimer);
    setTimer = setInterval(startRefresh, 10000);

});

$("input#btn30").click(function () {
    clearInterval(setTimer);
    setTimer = setInterval(startRefresh, 30000);

});

$("input#btn60").click(function () {
    clearInterval(setTimer);
    setTimer = setInterval(startRefresh, 60000)

});