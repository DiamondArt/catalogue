$(function(){

    var carousel,
        windowWidth,
        windowHeight,
        i=0,
        div,
        divitemW,
        divitemH,
        divitemMarge,
        NbreItemLigne,
        NbreItemColone,
        NbreItemAffichable,
        data,
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
             currentCatalogue = NbreItemAffichable;

             data=["screenshot.png","image-1.jpg","image-3.png" ,"image-7.jpeg",
             "image-8.jpg","image-9.jpg","image-10.png","image-2.jpg","image-6.jpeg",
             "image-4.jpeg","image-5.jpeg"];
             div = $("<div>");
         }

         function bodyShow() {
            initialize();
            $('body').append(div);
            $('div').addClass("swiper-container");
            $('.swiper-container').append('<div class="swiper-wrapper"></div>');
            $('.swiper-container').append('<div class="swiper-pagination"></div>');
            iframe= "<iframe>";

            for(i=1; i <= data.length; i++)
                {
                    jQuery('<div/>', {
                        id: 'item'+i,
                        "class": 'swiper-slide animate__animated animate__slideInRight swiper-slide'+i,
                    }).appendTo('.swiper-wrapper');
                    $('#item'+i).append("<img class='catalogue-image'/>")

                    var $div = $("#imgNames");

                    $('#item'+i).append('<a class="" data-toggle="modal"> voir</a>');
                    $('#item'+i+' a').attr("href", "./responsive.html");
                }

                $.each(data,function(index,value){
                    $(".swiper-slide img:eq("+index+")").attr('src','./images/'+value)
                    });
                $(".swiper-slide img").css("width", divitemW);

                $(".swiper-slide").mouseover(function(){
                    $('.swiper-slide a').show(function(){});
                });

                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                   // spaceBetween: 30,
                    // init: false,
                    coverflowEffect: {
                        rotate: 30,
                        slideShadows: false,
                      },
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },
                    breakpoints: {
                        640: {
                            slidesPerColumn: NbreItemColone,
                            slidesPerView: NbreItemLigne,
                            spaceBetween: divitemMarge,
                        },
                        768: {
                            slidesPerColumn: NbreItemColone,
                            slidesPerView: NbreItemLigne,
                          spaceBetween: divitemMarge,
                        },
                        1024: {
                            slidesPerColumn: NbreItemColone,
                            slidesPerView: NbreItemLigne,
                            spaceBetween: divitemMarge,
                          },
                    }
                  });
        }

    $(document).ready(function(){
     bodyShow();
    });

    });