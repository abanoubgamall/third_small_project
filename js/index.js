/*


$(".test").hide(2000)
$(".test").show(2000)
$(".test").toggle(2000)

$(".test").slideUp(2000)
$(".test").slideDown(2000)
$(".test").slideToggle(2000)


$(".test").fadeIn(2000)
$(".test").fadeOut(2000)
$(".test").fadeToggle(2000)
$(".test").fadeTo(2000 , 0.5)

$(".test").animate({width:'100%' , height:'100%'} , 2000 )
//$(".test").slideUp(1000).slideDown(1000).fadeOut(1000)
//$(".test").slideUp(1000 , function () { $("#btn").fadeOut(1000)  })
*/


/*
settes & getters

attr("src" , "s.jpg")
.attr("src")
.css("color" , "Red")
.html();
.text();

.val("ahmed");
.after()
.before();

.append();
.prepend();

.addClass()
.removeClass()
.toggleClass();


width()
innerWidth();
outerWidth(true) 





*/
/*
parents("p")
parent()
parentsUntil()


children()
find()


.siblings();
.next();
.nextAll();
.prev();
.prevAll();


.last()
.first()
.eq()
.not();
*/



let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset)
    {

   $("nav").addClass("bg-black");
   $("nav").addClass("px-5");

    }
    else
    {
        $("nav").removeClass("bg-black");
        $("nav").removeClass("px-5");
    }

})
$("#btnUp").click(function(){
    
})

$("a").click(function(){

let aH=$(this).attr("href");
$("body,html").animate({scrollTop:$(aH).offset().top},1000)

})