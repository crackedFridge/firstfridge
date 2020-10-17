/**
 * Created by max.janssenmueller on 30.03.19.
 */
function fixedNav() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
        if ($("#scrollable-area").scrollTop() > $("#header-logo-container").height() + 3) {
            $('#navigation-container-mobil').css('width', $('#navigation-container-mobil').width() + "px");
            $('#main').css('padding-top', $("#navigation-container-mobil").height() + 'px');
            $('#navigation-container-mobil').css('position', 'fixed');
            $('#navigation-container-mobil').css('top', '0');
        } else {
            $('#navigation-container-mobil').css('width', "100%");
            $('#main').css('padding-top', '0');
            $('#navigation-container-mobil').css('position', 'relative');
        }
    }else{
        if ($("#scrollable-area").scrollTop() > $("#header-logo-container").height() + 3) {
            $('#navigation-container').css('width', $('#navigation-container').width() + "px");
            $('#main').css('padding-top', $("#navigation-container").height() + 'px');
            $('#navigation-container').css('position', 'fixed');
            $('#navigation-container').css('top', '0');
        }else{
            $('#navigation-container').css('width', "100%");
            $('#main').css('padding-top', '0');
            $('#navigation-container').css('position', 'relative');
        }
    }
}

$( document ).ready(function() {
    $( window ).resize(function() {
        if($("#sidebarLeft").hasClass("slidRight")) {
            $("#leftBurger").trigger("click")
        }
    })

    $("#scrollable-area").click(function() {
        if($("#sidebarLeft").hasClass("slidRight")) {
            $("#leftBurger").trigger("click")
        }
    })
})