var shloka_number =1;
var current_analyzer ="grammer_analysis_slider";
var slide_width = 0;
var metrical_slide_no = 0;
var alankar_slide_no = 0;
var grammer_slide_no = 0;

function analysis_options(shloka_no)
{
    shloka_number = shloka_no;
    window.location.href="analyzers.html";
    slideShow("grammer_analysis_slider")
}

function display_analysis(slider_id)
{
    if(slider_id == 'metrical_analysis_slider' && metrical_slide_no == 0) 
    {
        slideShow(slider_id);
        metrical_slide_no++;
    }
    else if(slider_id == 'alankar_analysis_slider' && alankar_slide_no == 0)
    {
        slideShow(slider_id);
        alankar_slide_no++;
    }
    document.getElementById(current_analyzer).style.display = "none";
    document.getElementById(slider_id).style.display = "flex";
    current_analyzer = slider_id ;
}

function display_school(school_id){
    document.getElementById(current_analyzer).style.display = "none";
    document.getElementById(school_id).style.display = "flex";
    current_analyzer = school_id ;
}

function slideShow(sliderId)
{
 //variables
 var slideCount = $('#'+sliderId+' ul li').length;
 var slideWidth = $('#'+sliderId+' ul li').width();
 var slideHeight = $('#'+sliderId+' ul li').height();
 var sliderUlWidth = slideCount * slideWidth;

 slide_width = slideWidth;

 var slideWidth = $('#'+sliderId+' ul li').width();

 $('#'+sliderId+'').css({ width: slideWidth, height: slideHeight });
 $('#'+sliderId+' ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
 $('#'+sliderId+' ul li:last-child').prependTo('#'+sliderId+' ul');
 
 //$('#'+sliderId+' ul li:nth-child(1)').prependTo('#'+sliderId+' ul'); //'+shloka_number+'
}

function moveLeft(sliderId) {
    $('#'+sliderId+' ul').animate({
        left: + slide_width
    }, 300, function () {
        $('#'+sliderId+' ul li:last-child').prependTo('#'+sliderId+' ul');
        $('#'+sliderId+' ul').css('left', '');
    });
};

function moveRight(sliderId) {
    $('#'+sliderId+' ul').animate({
        left: - slide_width
    }, 300, function () {
        $('#'+sliderId+' ul li:first-child').appendTo('#'+sliderId+' ul');
        $('#'+sliderId+' ul').css('left', '');
    });
};
