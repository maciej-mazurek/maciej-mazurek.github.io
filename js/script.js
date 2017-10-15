$(document).ready(function(){
    
    navNewClass();
    showContent();
    
});

$(window).scroll(function(){
    
    navNewClass();
    showContent();
    
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

function showContent() {
    var scroll = $(window).scrollTop();

    if(scroll >= 100) {
        $('#myPicture').fadeIn(1500);
        $('.about-content').fadeIn(1500);
    }else {
        $('#myPicture').fadeOut(100);
        $('.about-content').fadeOut(100);
    }
    
    if (scroll >= 800) {
        $('#skills-icons').fadeIn(1500);
        $('#skillsHeader').fadeIn(1500);
    }else {
        $('#skills-icons').fadeOut(100);
        $('#skillsHeader').fadeOut(100);
    }
        
    }