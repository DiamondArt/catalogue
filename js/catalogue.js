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

             data=["image-1.jpg","image-2.jpg","image-3.png",
             "image-4.jpeg","image-5.jpeg","image-6.jpeg","image-7.jpeg",
             "image-8.jpg","image-9.jpg","image-10.png"];
             div = $("<div>");
         }

         function bodyShow() {
            initialize();
            $('body').append(div);
            $('div').addClass("swiper-container");
            $('.swiper-container').append('<div class="swiper-wrapper"></div>');
            $('.swiper-container').append('<div class="swiper-pagination"></div>');
            iframe= "<iframe>";

            for(i=0; i <= data.length; i++)
                {
                    jQuery('<div/>', {
                        id: 'item'+i,
                        "class": 'swiper-slide animate__animated animate__slideInRight',
                    }).appendTo('.swiper-wrapper');
                    $('#item'+i).append("<img class='catalogue-image'/>")

                    var $div = $("#imgNames");

                    jQuery('<div/>', {
                        id: 'animatedModal'+i,
                        "class": 'modal  modal-message modal-success fade ',
                    }).appendTo('body');

                   $('#animatedModal'+i).attr('aria-hidden', 'true');
                   $('#animatedModal'+i).attr('tabindex', '-1');
                   $('#animatedModal'+i).attr('role', '-dialog');

                   $('#animatedModal'+i).css('display', 'none');
                   jQuery('<div/>', {
                    id: 'dialogue'+i,
                    "class": 'modal-dialog modal-lg',
                }).appendTo('#animatedModal'+i);

                   jQuery('<div/>', {
                    id: 'modal-content'+i,
                    "class": 'modal-content',
                }).appendTo('#dialogue'+i);

                jQuery('<div/>', {
                    id: 'modal-header'+i,
                    "class": 'modal-header',
                }).appendTo('#modal-content'+i);

                jQuery('<div/>', {
                    id: 'modal-body'+i,
                    "class": 'modal-body',
                }).appendTo('#modal-content'+i);

                $("#modal-body"+i).append(iframe);
                var modalwidth = $("#modal-body"+i).width();

                $("iframe").css("width","850px");
                $("iframe").css("height","400px");
                $("iframe").attr("src", "https://colorlib.com/preview/theme/theinterior/");

                  $('#modal-content'+i).append('<div  class="modal-footer"><a href="./index.html" type="button" class="btn btn-primary">OK</a></div>');

                    $('#item'+i).append('<a class="" data-toggle="modal"> voir</a>');
                    $('#item'+i+' a').attr("href", "#animatedModal"+i);
                }

                $(".swiper-slide img").attr("src", "./images/image-3.png");
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