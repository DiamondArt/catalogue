$(function(){

    var carousel,
        windowWidth,
        windowHeight,
        i=0,
        carouselItem,
        itemInterval,
        title,
        categories,
        pagination,
        path,
        div,
        item,
        divitem,
        divitemW,
        divitemH,
        divitemMarge,
        NbreItemLigne,
        NbreItemColone,
        NbreItemAffichable,

        iframe,
        windowMarge,
        reelwindowMargeHoriz,
        reelwindowMargeVerti,
        easeTemps,
        item ,
        indexItem,
        currentGroupItem;

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
             console.log(NbreItemLigne);
             console.log(NbreItemColone);

             reelwindowMargeHoriz = ( windowWidth - (windowMarge + NbreItemLigne * ( divitemW + divitemMarge ) ))/2;
             reelwindowMargeVerti = ( windowHeight - (windowMarge + NbreItemColone * ( divitemH + divitemMarge ) + divitemMarge ))/2;
             NbreItemAffichable = NbreItemColone * NbreItemLigne;
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
                ll=0, //decalage à gauche après animation
                il=1,
                ic=1;

                for(i=1; i <= NbreItemAffichable; i++)
                {
                    jQuery('<div/>', {
                        id: 'item'+i,
                        "class": 'divitem',
                        title: 'Numero ' +i
                    }).appendTo('.carousel');

                    $('#item'+i).css("width",  divitemW);
                    $('#item'+i).css("position", "absolute");

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
                    $('#item'+i).css('background-color', 'yellow');
                  il++;
                }
                        /*********pagination*********/

                item =  $(".divitem");
                indexItem = item.length - 1; // on définit l'index du dernier élément
                currentGroupItem = item.eq(i);
               // item.css('display', 'none'); // on cache les items
                currentGroupItem.css('display', 'block');

                $(".carousel").append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

                $('.next').click(function(){ // catalogue suivante

                    i++; // on incrémente le compteur

                    if( i <= indexItem ){
                        item.css('display', 'none'); // on cache les catalogue
                        currentGroupItem = item.eq(i); // on définit le nouvelle catalogue
                        currentGroupItem.css('display', 'block'); // puis on l'affiche
                    }
                    else{
                        i = indexItem;
                    }

                 });

                 $('.prev').click(function(){ // catalogue précédente

                    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

                    if( i >= 0 ){
                        $item.css('display', 'none');
                        $currentGroupItem = $groupItem.eq(i);
                        $currentGroupItem.css('display', 'block');
                    }
                    else{
                        i = 0;
                    }

                });

                $(".carousel div").addClass("divitem");

        }

    $(document).ready(function(){
     bodyShow();
    });
    
    $(window).resize(function(){
        $( ".divitem").remove();
        bodyShow();
       });
    
    });