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