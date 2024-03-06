
$(window).on('load', function () {
    $('#preloader-active').delay(3600).fadeOut('slow');
    $('body').delay(3600).css({
        'overflow': 'visible'
    });
});

$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
    } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
    }
});

$('#back-top a').on("click", function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});


function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("back-top").style.display = "none";
    document.body.style.overflow = "hidden";

}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("back-top").style.display = "block";
    document.body.style.overflow = "";
}

function openForm1() {
    document.getElementById("myForm1").style.display = "block";
    document.getElementById("back-top").style.display = "none";
    document.body.style.overflow = "hidden";

}

function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("back-top").style.display = "block";
    document.body.style.overflow = "";
}

function openForm2() {
    document.getElementById("myForm2").style.display = "block";
    document.getElementById("back-top").style.display = "none";
    document.body.style.overflow = "hidden";

}

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
    document.getElementById("back-top").style.display = "block";
    document.body.style.overflow = "";
}