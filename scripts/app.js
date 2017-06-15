import $ from 'jquery';

require('../scss/style.scss');

console.log('hey');
$(function() {

    $('body').on('mousemove', function (e) {
        var x = e.pageX - ($(window).width() / 2);
        var y = e.pageY - ($(window).height() / 2);
        $('.moving-bg > div').each(function () {
            var moveX = x * parseInt($(this).attr('data-parallax-factor')) / 25;
            var moveY = y * parseInt($(this).attr('data-parallax-factor')) / 25;
            $(this).css('transform', 'translate(' + moveX + 'px, ' + moveY + 'px)');
        });
    });

    $('.slide-back').click(function() {
        $('.about-container').removeClass('visible');
    });
    $('a.button').click(function() {
        $('.about-container').addClass('visible');
    });
    $('#burger-menu').click(function() {
        $('#menu').toggleClass('visible');
        $('#burger-menu > button').toggleClass('is-active');
    });
});