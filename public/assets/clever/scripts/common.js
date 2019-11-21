// slider

$(function () {
    $('#da-slider').cslider({
        current     : 0,    
        // index of current slide
        bgincrement : 50,   
        // increment the background position 
        // (parallax effect) when sliding
        autoplay    : false,
        // slideshow on / off
        interval    : 4000  
        // time between transitions
    });
});

// filter

$(function (){
    $('body').on('click', '.filter-wrap > li.drop > a', function (e) {
        e.preventDefault();

        if($(e.target).closest('li').children('ul').length > 0) {
            $(e.target).toggleClass('active');  
            $(e.target).closest('li').children('ul').animate({
            height : "toggle"
            }, 500);
        }
        return false;
    });

    $('#filter-choice').change(function () {
        $('.filter-wrap').removeClass('active');

        var id = $(this).val();
        $('#filter-wrap'+id).addClass('active');

    })
});

// slider range
$( function() {
    $( "#slider-cost" ).slider({
      range: true,
      min: 1,
      max: 10000,
      values: [ 0, 5000 ],
      slide: function( event, ui ) {
        $("#cost-min").val(ui.values[0]);
        $("#cost-max").val(ui.values[1]);
      }
    });
    $("#cost-min").val($("#slider-cost").slider("values", 0));
    $("#cost-max").val($("#slider-cost").slider("values", 1));
});


// tabs
$( function() {
    $( "#tabs" ).tabs();
});

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.mobile-menu').addClass('active');
        } else {
            $('.mobile-menu').removeClass('active');
        }
    })
})

// basket and nav fixed
function windowSize(){
    if ($(window).width() <= '1000'){
        $(".header__basket").removeClass("fix");
        $(".navbar").removeClass("navbar-fixed");
    } else {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100) { 
                $(".header__basket").addClass("fix");
                $(".navbar").addClass("navbar-fixed");
            } else { 
                $(".header__basket").removeClass("fix");
                $(".navbar").removeClass("navbar-fixed");
            }
        });
    }
}
$(window).on('load resize',windowSize);

// bx-slider
$(document).ready(function(){
  $('.bx-slider').bxSlider({
    slideWidth: 320,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 50
  });
});

$(function () {
    $('.c2-ic').hover(function() {$(this).toggleClass('active')});
})

// Анимация полета товара в корзину
$(function (){
    $(".item-basket").on("click",function(e){
        // var id = $(this).data("id"),
            var item = $(e.target).closest('.item').find('.item-img').children('img'),
            itemCount = $('#item-count');

        $(item)
            .clone()
            .css({'position' : 'absolute', 'z-index' : '111000000', top: $(this).offset().top-200, left:$(this).offset().left-100})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $(".ic").offset()['left'],
                top: $(".ic").offset()['top'],
                width: 20}, 1000, function() {
                $(this).remove();
        });
        
        var count = parseInt($('#item-count').text());
        count++;
        $('#item-count').text(count);

        var cost = parseInt($('.item-cost').text());
        var finalCost = parseInt($('#basket').find('.dark-text').text());
        finalCost += cost;
        $('#basket').find('.dark-text').text(finalCost);

        return cost;
    });
})

// mobile menu open
$('.mobile-menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active-mobile');
    $(this).closest('.container').children('ul').toggleClass('active');
})

// filter mobile
$('.mobile-filter').click(function(e) {
    $(this).toggleClass('active');
    $('.filter').toggleClass('active');
})

// login modal box
$(function () {
    $('body').on('click', '.btn-modal', function (e) {
        e.preventDefault();
        if ($(this).data('modal')) {
            var id = $(this).data('modal');
        }
        $('#modal-'+ id).arcticmodal();
        return false;
    })
})

// cart slider
$(function () {
    $('.cart-slider').bxSlider({
        pagerCustom: '#bx-pager',
        slideWidth: 330,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 50
    });
})

$(function () {
    $('.tabs-link').hover(function (e) {
        e.preventDefault();
        $('.tabs-content').addClass('hide').css('display','none');
        $('.tabs-link').closest('li').removeClass('ui-state-active ui-tabs-active');
        $(this).closest('li').addClass('ui-state-active ui-tabs-active');
        var id = $(this).data('cart');
        $('#tabs-' + id).removeClass('hide').css('display','block');
    })
    $('.cart-tabs').mouseleave(function (e) {
        $('.tabs-content').addClass('hide').css('display','none');
        $('.tabs-link').closest('li').removeClass('ui-state-active ui-tabs-active');
        $('#tabs-1').css('display','block');
    })
})

// cart

$(function () {
    $('.cart-table__delete').click(function (event) {
        event.preventDefault();

        var del = confirm('Вы действительно хотите удалить товар?');

        if ( del == true ) {
            $(this).closest('tr').remove();
        } else return;
    })

    $('.table-count').change(function () {
        var count = $(this).val(),
            itemPrice = $(this).closest('tr').children('.order-price').text();

        var itemTotalCost = count * itemPrice;

        $(this).closest('tr').children('.total-price').text(itemTotalCost);

        calcTotalPrice();
    })
})

function calcTotalPrice () {
    var sum = 0;
    $('.total-price').each(function () {

        sum += parseInt($(this).text());
        $('#cart-result').val(sum + ' руб.');
    })
}

$(function () {
    $('.delivery').change(function (e) {

        $('.radio-wrap').children('textarea').hide();

        if ( $(e.target).is("#delivery2")) {
            $(this).parent('.radio-wrap').children('textarea').show();
        }        

        if ( $(e.target).is("#delivery3")) {
            $(this).parent('.radio-wrap').children('textarea').show();
        } 

        if ( $(e.target).is("#delivery1")) {
            $('#delivery-adres1').hide();
            $('#delivery-adres2').hide();
        }
    })    

    $('.payment').change(function (e) {
        if ( $(e.target).is("#payment2")) {
            $('#dwnd').css('display','block');
        } 

        if ( $(e.target).is("#payment1")) {
            $('#dwnd').hide();
        }
    })
})

// tabs
$(function () {
    $('.tabs-control a').click(function (event) {
        event.preventDefault();

        $('.tabs-control').children('li').removeClass('active');
        $('.tabs-item ').removeClass('active');

        $(this).parent('li').addClass('active');

        var tabId = $(this).attr('href');

        $('#item-' + tabId).addClass('active');

        return false;
    })

    $('.btn-next').click(function (event) {

        event.stopPropagation();

        var tabId = $(this).data('next');

        switch(tabId) {
            case 2:
                $('.tabs-control').children('li').removeClass('active');
                $('.tabs-item ').removeClass('active');
                $('.tabs-control').children('li:nth-child(2)').addClass('active');
                $('#item-2').addClass('active');
                break;

            case 3:
                if ($('.info-text').is(':visible')) {
                    var err = 0;
                    $('.inpt').each(function () {
                        if( $(this).val().length == 0 ) {
                            $(this).addClass('err');
                            err = 1;
                        } else {
                            $(this).removeClass('err');
                            err = 0;
                        }
                    })
                    if ( err == 0 ) {
                        $('.tabs-control').children('li').removeClass('active');
                        $('.tabs-item ').removeClass('active');
                        $('.tabs-control').children('li:nth-child(3)').addClass('active');
                        $('#item-3').addClass('active');
                    } else {
                        alert('Заполните все поля!');
                        return;
                    }
                }
                break;
        }

        return false;
    })

    $('.fstpayment').click(function () {
        $('.tabs-item').find('.info-text').show();
        $('.tabs-item').find('.login-text').hide();
    })    

    $('.auth').click(function () {
        $('.tabs-item').find('.info-text').hide();
        $('.tabs-item').find('.login-text').show();
        $('#modal-1').arcticmodal();
    })
})