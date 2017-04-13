var _current = $(".header-nav").find(".active");
$(".header-nav").find("li").hover(function() {
    if ($(this).hasClass("active")) {
        return false;
    }
    $(".header-nav").find(".active").removeClass('active')
    $(this).addClass("active")
}, function() {
    $(this).removeClass("active")
})

$(".header-nav").mouseleave(function() {
    _current.addClass("active")
})
