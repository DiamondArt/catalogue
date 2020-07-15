$(function(){

var carousel,
    windowWidth,
    windowHeight,
    i,
    groupeVignette,
    itemInterval,
    title,
    categories,
    pagination,
    data,
    div,
    item,
    divitem,
    divitemW,
    divitemH,
    divitemMarge,
    NbreItemLigne,
    NbreItemColone,
    NbreItemAffichable,
    getItemWidthUn,
    getItemWidtdDeux,
    iframe,
    windowMarge,
    reelwindowMargeHoriz,
    reelwindowMargeVerti,
    easeTemps;






    function initialize() {
         divitemMarge = 30;
         divitemW = 300;
         divitemH = 300;
         windowMarge = 0;
         easeTemps = 1200;
         windowWidth =  $(window).width();
         windowHeight = $(window).height();
         NbreItemLigne = Math.trunc((windowWidth - 2*windowMarge)/(divitemW+divitemMarge));
         NbreItemColone = Math.trunc((windowHeight - 2*windowMarge)/(divitemH+divitemMarge));
         reelwindowMargeHoriz = ( windowWidth - (windowMarge + NbreItemLigne * ( divitemW + divitemMarge ) ))/2;
         reelwindowMargeVerti = ( windowHeight - (windowMarge + NbreItemColone * ( divitemH + divitemMarge ) + divitemMarge ))/2;
         NbreItemAffichable = NbreItemColone * NbreItemLigne;

         data=["screenshot.png","image-1.jpg","image-3.png" ,"image-7.jpeg",
         "image-8.jpg","image-9.jpg","image-10.png","image-2.jpg","image-6.jpeg",
         "image-4.jpeg","image-5.jpeg","image-10.png","image-2.jpg","image-6.jpeg",
         "image-4.jpeg","image-5.jpeg","image-10.png","image-2.jpg","image-6.jpeg",
         "image-4.jpeg","image-5.jpeg","image-10.png","image-2.jpg","image-6.jpeg",
         "image-4.jpeg","image-5.jpeg"];


        groupeVignette = Math.trunc(data.length/NbreItemAffichable);

         div = $("<div>");
         div = $("<div>");
         $('body').css("margin",0);
         $('body').css("overflow","hidden");
     }

     function bodyShow() {
        initialize();
        $('body').append(div);
        $('div').addClass("carousel");

        var nl = NbreItemLigne;
            ligne = 0,
            ll=0,
            il=1,
            ic=1;
         // alert(groupeVignette);

            for(i=1; i <= data.length; i++)
            {
                jQuery('<div/>', {
                    id: 'groupeItem'+i,
                    "class": 'groupeItem',
                    title: 'Numero ' +i
                }).appendTo('.carousel');

                jQuery('<div/>', {
                    id: 'item'+i,
                    "class": 'divitem',
                    title: 'Numero ' +i
                }).appendTo('.carousel');

                $('#item'+i).append("<img class='catalogue-image'/>");

                $('img').css("width",  divitemW);
                $('img').css("width",  divitemH);

                $('#item'+i).css("width",  divitemW);
                $('#item'+i).css("position", "absolute");

                $.each(data,function(index,value){
                        $(".divitem img:eq("+index+")").attr('src','./images/'+value);
                        $(".divitem img:eq("+index+")").click(function(){
                            location.href="./responsive.html";
                        });
                    });

                 if (il > NbreItemLigne) {
                   il = 1;
                    ligne++;
                }
                ll = (il-1) * (divitemW + divitemMarge)+ reelwindowMargeHoriz;

                // position hors ecran
                $('#item'+i).css("left",  windowWidth+2*(divitemW));
                // vrai position apres animation

                $('#item'+i).delay( 100*i ).animate({ left : ll +"px" }, easeTemps, 'easeOutQuint');
                $('#item'+i).css("top",  reelwindowMargeVerti + ligne*(divitemH+divitemMarge)+divitemMarge);
                $('#item'+i).css("height",  divitemH);
                $('#item'+i).css('background-color', 'white');
              il++;
            }
            $(".carousel div").addClass("divitem");
            $("body").append("<div id='pagination'><span class='prev'> < </span><span class='next'> > </span>");

                         /**************** pagination ***********/
            var j= 0;
            var indexItem =  $(".divitem").length - 1;
            var CurentGroupeItem = $(".divitem").eq(j);

            function next() {
                $(".next").click(function(){
                    j++; // on incrémente le compteur
                    if( j <= indexItem ){
                        $(".divitem").css('display', 'none'); // on cache les images
                        $CurentGroupeItem = $img.eq(j); // on définit la nouvelle image
                        $CurentGroupeItem.css('display', 'block'); // puis on l'affiche
                    }
                    else{
                        i = indexItem;
                    }
                  })
                 };
            }
            function prev() {
                $(".prev").click(function(){

                });
            }
$(document).ready(function(){
 bodyShow();
 next();
 prev();
});

$(window).resize(function(){
    $( ".divitem").remove();
    bodyShow();
   });
});