$(window).scroll(function() {
    var winScroll = $(this).scrollTop();
    if (winScroll >= 110) {
        $("nav").addClass("header-active");
    } else {
        $("nav").removeClass("header-active");
    }
});