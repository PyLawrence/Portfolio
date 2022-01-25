$(document).ready(function(){
    $(".slide-toggle").click(function(){
        $(".box").animate({
            width: "toggle"
        });
    });
});

$(document).ready(function(){
    $(".box").animate({
            width: "toggle"
    },0);
    $(".box").animate({
        opacity: 1
    }, 10);
});

var div = document.querySelector(".fade");
var btn = document.querySelector(".fadeButton");
var visible = false
btn.addEventListener("click", function(){
    console.log("testing")
    if (visible) {
        console.log("setting not visible")
        $(".fade").fadeOut(400);
        visible = false;
    }
    else {
        console.log("setting visible")
        $(".fade").fadeIn(200);
        visible = true;
    }


});