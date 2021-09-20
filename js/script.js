$('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
    });

$('.menu').on('click', function(){
    $('.menu').toggleClass('is-active');
    });

// 二重に toggleClass がかかってしまうからつけたらだめ
// $('.menu__item').on('click', function(){
//     $('.menu').toggleClass('is-active');
//     });

$('.meiwakuTwiIcon').on('click', function(){
    $('.meiwakuTwiIcon').toggleClass('fa-10x').toggleClass('meiwakuTwi-is-active');
    });
