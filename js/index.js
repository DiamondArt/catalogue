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
        $('div').addClass("carousel");
        $('body').css("margin","auto");

        $('.carousel').css("width", widowsWidth);
        $('.carousel').css("height", "800");
        $('.divitem').css("margin-left", "80px");
        $('.divitem').css("position", "relative");
        $('.divitem').css("left", "70px");


        $('.carousel').css('background-color', 'red');

            for(i=0; i<=5; i++)
            {
                 divitem = document.createElement('div');
                 $('.carousel').append(divitem);
            }

        $(".carousel div").addClass("divitem");
        $('div .divitem').css("position", "absolute");
        $('div .divitem').css("width", "300");

        getItemWidthUn = $('div .divitem').width();

        $('div .divitem').css("margin", "15px");
        $('div .divitem').css("top", "90px");
        $('div .divitem').css("left", leftsize +"px");
        $('div .divitem').css("height", "300");
        $('div .divitem').css('background-color', 'yellow');

        $('div .divitem').eq(1).css("background-color", "pink");
        $('div .divitem').eq(1).css("left", (getItemWidthUn+200)+ "px");

        getItemWidtdDeux = getItemWidthUn+200;

        $('div .divitem').eq(2).css("background-color", "purple");
        $('div .divitem').eq(2).css("left", (getItemWidtdDeux+ 400) + "px");
        $('div .divitem').eq(3).css("left", "-300px");
        $('div .divitem').eq(3).css("margin", "400px");
        $('div .divitem').eq(4).css("left", "100px");
        $('div .divitem').eq(4).css("margin", "400px");
        $('div .divitem').eq(5).css("left", "500px");
        $('div .divitem').eq(5).css("margin", "400px");
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