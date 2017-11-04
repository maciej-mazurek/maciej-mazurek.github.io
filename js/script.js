$(document).ready(function(){
    
    navNewClass();

});

$(window).scroll(function(){

    navNewClass();

});
    
function navNewClass() {
    var heightValue = 100;
    
    var scroll = $(window).scrollTop();
    
    if(scroll >= heightValue) {
        $('#main-nav').addClass('scroll');
        $('a.links').addClass('scroll');
    }else {
        $('#main-nav').removeClass('scroll');
         $('a.links').removeClass('scroll');
    }
}


$('.links').click(function () {
    var link = $(this).attr("href");
    var element = link.substr(link.indexOf("#"));
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 1000);
    return false;
});
    

$('#slideThree').click(function() {
    if($(this).prop("checked")) {
        
        $('.english').hide();
        $('.polish').show();
        $('input[placeholder="Name"]').attr('placeholder', 'Imię i Nazwisko');
        $('textarea[placeholder="Your message"]').attr('placeholder', 'Treść wiadomości');
        
        
        
    } else {

        $('.english').show();
        $('.polish').hide();
        $('input[placeholder="Imię i Nazwisko"]').attr('placeholder', 'Name');
        $('textarea[placeholder="Treść wiadomości"]').attr('placeholder', 'Your message');
    }
    
});
    
                      
                      
            

