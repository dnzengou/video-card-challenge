$(document).ready(function($) {

    $('.card__share > a').on('click', function(e) {
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('card__social--active');
        $(this).toggleClass('share-expanded');
    });

});

$("#element").hover(function() {
    //fadeout first image using jQuery fadeOut
    $("#img1").fadeOut(200);
    //fadein second image using jQuery fadeIn 
    $("#img2").fadeIn(200);
}, function() {
    //fadeout second image using jQuery fadeOut
    $("#img1").fadeIn(200);
    //fadein first image using jQuery fadeIn
    $("#img2").fadeOut(200);
});

$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o");
});