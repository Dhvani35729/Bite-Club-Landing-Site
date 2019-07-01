$('.email').on("change keyup paste",
    function(){
        if($(this).val()){
            $('.icon-paper-plane').addClass("next");
        } else {
            $('.icon-paper-plane').removeClass("next");
        }
    }
);

$('.next-button').hover(
    function(){
        $(this).css('cursor', 'pointer');
    }
);

$('.next-button.email').click(
    function(){
        console.log("Something");
        $('.email-section').addClass("fold-up");
        $('.password-section').removeClass("folded");
    }
);

$('.password').on("change keyup paste",
    function(){
        if($(this).val()){
            $('.icon-lock').addClass("next");
        } else {
            $('.icon-lock').removeClass("next");
        }
    }
);

$('.next-button').hover(
    function(){
        $(this).css('cursor', 'pointer');
    }
);

$('.next-button.password').click(
    function(){
        console.log("Something");
        $('.password-section').addClass("fold-up");
        $('.repeat-password-section').removeClass("folded");
    }
);

$('.repeat-password').on("change keyup paste",
    function(){
        if($(this).val()){
            $('.icon-repeat-lock').addClass("next");
        } else {
            $('.icon-repeat-lock').removeClass("next");
        }
    }
);

$(':input[type="submit"]').prop('disabled', true);

// $('.repeat-password-section').keyup(function() {
//   console.log('here');
// if($(this).val() != '') {
//
// }
// });
// });

$('.next-button.repeat-password').click(
    function(){
        console.log("Something -in - here");
        $(':input[type="submit"]').prop('disabled', false);
        $('.repeat-password-section').addClass("fold-up");
        $('.success').css("marginTop", 0);
    }
);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
