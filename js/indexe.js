/******  ******/
$(document).ready(function(){

    let carousel;
    let widowsWidth;
    let windowsHeight;
    let i;
    let carouselItem;
    let itemInterval;
    let title;
    let categories;
    let pagination;
    let path;
    let div;
    let item;
    let divitem;
    let leftsize= 100;
    let getItemWidthUn;
    let getItemWidtdDeux;
    let iframe;

    function bodyShow() {

        widowsWidth =  $(window).width();
        windowsHeight = $(window).height();
        div = document.createElement('div');

        $('body').append(div);
        $('body').css("background-color","blue");
        $('body').css("overflow","hidden");
        $('body').css("margin","auto");

        $('div').addClass("carousel");
        $('.carousel').css("width", widowsWidth);
        $('.carousel').css("height", "800");

        $('.divitem').css("margin", "10px");
        $('.divitem').css("position", "absolute");
        $('.divitem').css("left", "70px");

        $('.carousel').css('background-color', 'red');
        $('.carousel').css('padding-left', '120px');

            for(i=0; i<=5; i++)
            {
                 divitem = document.createElement('div');
                 $('.carousel').append(divitem);
            }
           

        $(".carousel div").addClass("divitem");


        $('div .divitem').css("float", "left");
        $('div .divitem').css("width", "300");


        $('div .divitem').css("margin", "15px");
        $('div .divitem').css("top", "90px");
        $('div .divitem').css("left", leftsize +"px");
        $('div .divitem').css("height", "300");
        $('div .divitem').css('background-color', 'yellow');

        $('div .divitem').eq(1).css("background-color", "pink");
      /*  $('.carousel .divitem').anime({
            targets: '.easing-demo .el',
            translateX: 250,
            easing: 'easeInOutExpo'
          });*/


          $('.carousel .divitem').effect( "bounce", "slow" );
  

            $('.carousel .divitem').toggle("slide", { direction: "left" }, 1000
                );
       // $(".carousel .divitem").show( "slide", {direction: "up" }, 2000 );



        /* iframe= document.createElement("iframe");
        $("div .divitem").append(iframe);
        $("iframe").css("height","300")
        $("iframe").attr ("src","https://e-digital.fr/");*/
    }


    $(window).width();// get device width
    $(window).height();// get device height
    $(window).innerHeight(); // compare la hauteur
    $(window).innerWidth(); // compare la largeur

 bodyShow();
});