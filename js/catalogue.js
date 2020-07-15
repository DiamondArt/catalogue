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
            $('body').append('<div class="swiper-pagination"></div>');
            $('body').append('<div class="swiper-button-next"></div>');
            $('body').append('<div class="swiper-button-prev"></div>');
            iframe= "<iframe>";

            jQuery('<div/>', {
                "class": 'container-fluid responsive-container',
            }).appendTo('body');

            $(".responsive-container").hide();

            jQuery('<div/>',
            {
                id: "row",
                "class": 'row',
            }).appendTo('.responsive-container');

            $('#row').append('<div class="col-container col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'catalogue-desktop animate__animated animate__slideInRight',
            }).appendTo('.col-container');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'col-lg-6 col-md-6 col-sm-6 col-xs-6 laptop',
            }).appendTo('.col-container');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'col-lg-6 col-md-6 col-sm-6 col-xs-6 tablette',
            }).appendTo('.col-container');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'col-lg-6 col-md-6 col-sm-6 col-xs-6 mobile',
            }).appendTo('.col-container');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'catalogue-laptop animate__animated animate__slideInRight',
            }).appendTo('.laptop');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'catalogue-tablette animate__animated animate__slideInRight',
            }).appendTo('.tablette');

            jQuery('<div/>',{
                id: 'draggable',
                "class": 'catalogue-mobile animate__animated animate__slideInRight',
            }).appendTo('.mobile');

            jQuery('<iframe/>',{
                id:'imagepath',
                "class": 'imagepath iframe-desktop',
            }).appendTo('.catalogue-desktop');

            jQuery('<iframe/>',{
                id:'imagepath',
                "class": 'imagepath iframe-laptop',
            }).appendTo('.catalogue-laptop');

            jQuery('<iframe/>',{
                id:'imagepath',
                "class": 'imagepath iframe-tablette',
            }).appendTo('.catalogue-tablette');

            jQuery('<iframe/>',{
                id:'imagepath',
                "class": 'imagepath iframe-mobile',
            }).appendTo('.catalogue-mobile');

            jQuery('<iframe/>',{
                id:'lienpath',
                "class": 'lienpath iframe-desktop',
            }).appendTo('.catalogue-desktop');

            jQuery('<iframe/>',{
                id:'lienpath',
                "class": 'lienpath iframe-laptop',
            }).appendTo('.catalogue-laptop');

            jQuery('<iframe/>',{
                id:'lienpath',
                "class": 'lienpath iframe-tabeltte',
            }).appendTo('.catalogue-tablette');

            jQuery('<iframe/>',{
                id:'lienpath',
                "class": 'lienpath iframe-mobile',
            }).appendTo('.catalogue-mobile');

            jQuery('<iframe/>',{
                id:'lienpath',
                "class": ' fixed-action-btn horizontal',
            }).appendTo('.responsive-container');
            $(".responsive-container").append('<a href="#" id="close" class=" btn-floating btn-large bg-primary" ><i class="large material-icons">close</i></a>')
            $(".responsive-container").append('<a class="btn-eye btn-floating btn-large bg-primary" ><i class="large material-icons">visibility</i></a>')

            $("#close").click(function(){
                $(".swiper-container").show();
                $(".swiper-button-next").show();
                $(".swiper-button-prev").show();
                $(".container-fluid").hide();
            });

            for(i=1; i <= data.length; i++)
                {
                    jQuery('<div/>', {
                        id: 'item'+i,
                        "class": 'swiper-slide animate__animated animate__slideInRight swiper-slide'+i,
                    }).appendTo('.swiper-wrapper');
                    $('#item'+i).append("<img class='catalogue-image'/>");
                    var $div = $("#imgNames");
                }

                $(".swiper-slide img").css("width", divitemW);

                $.each(data,function(index,value){
                    $(".swiper-slide img:eq("+index+")").attr('src','./images/'+ value);
                      //$(".swiper-slide img:eq("+index+")").click(function(){
                        //location.href="./responsive.html";
                        $(".swiper-slide img:eq("+index+")").click(function(){
                            $(".imagepath").attr('src','./images/'+ value);
                            //console.log(value);
                            //$(".lienpath").attr("src","./images/screenshot.png");
                            $(".swiper-container").hide();
                            $(".swiper-button-next").hide();
                            $(".swiper-button-prev").hide();
                            $(".container-fluid").show();
                     });
                     $(".btn-eye").click(function(){
                         $(".btn-eye").attr("href","https://hotels.vyconsulting-group.com/");
                     })
                    });

               // $("iframe #imagepath").attr("src","");
               // $("iframe #lienpath").attr("src","");



                var swiper = new Swiper('.swiper-container',{

                    slidesPerView: 1,
                   // spaceBetween: 30,
                    // init: false,
                    coverflowEffect: {
                        rotate: 30,
                        slideShadows: false,
                      },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
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
                    },
                  });


                    interact('#draggable')
                  .draggable({
                    // enable inertial throwing
                    inertia: true,
                    // keep the element within the area of it's parent
                    modifiers: [
                      interact.modifiers.restrictRect({
                        endOnly: true
                      })
                    ],
                    // enable autoScroll
                    autoScroll: true,

                    listeners: {
                      // call this function on every dragmove event
                      move: dragMoveListener,
                    }
                  });

                function dragMoveListener (event) {
                  var target = event.target
                  // keep the dragged position in the data-x/data-y attributes
                  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

                  // translate the element
                  target.style.webkitTransform =
                    target.style.transform =
                      'translate(' + x + 'px, ' + y + 'px)'
                  // update the posiion attributes
                  target.setAttribute('data-x', x)
                  target.setAttribute('data-y', y)
                }

                // this function is used later in the resizing and gesture demos
                window.dragMoveListener = dragMoveListener

        }
    $(document).ready(function(){
     bodyShow();
    });
});