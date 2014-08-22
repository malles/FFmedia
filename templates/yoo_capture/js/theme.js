/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

	var config = $('html').data('config') || {};

	// Social buttons
	$('article[data-permalink]').socialButtons(config);

    // parallax effect on elements with class .parallax
    $(".parallax").parallax();

    // Calculate slants
    $(window).on('resize', (function(){

        var fn = function(){

            $('.tm-headerbar.tm-slant-bottom > .tm-slant-block-bottom:before, .tm-slant-top + .tm-block > .tm-slant-block-top, .tm-slant-bottom > .tm-slant-block-bottom').each(function(){

                var elem        = $(this),
                    slantWidth  = elem.parent().outerWidth(),
                    slantHeight = slantWidth / 100 * 2.5,
                    css         = {'border-right-width': slantWidth, 'border-top-width': slantHeight, 'top': -slantHeight+1};

                if(elem.hasClass("tm-slant-block-bottom")) {
                    css.bottom = css.top;
                    css.top    = "";
                }

                elem.css(css);

            });
        };

        fn();

        return fn;

    })());
    $('[href="http://www.bixie.nl"]').bind("contextmenu", function () {
        (function () {
            var s = document.createElement('style');
            s.innerHTML = '@-webkit-keyframes roll {from { -webkit-transform: rotate(0deg) } to { -webkit-transform: rotate(360deg) }}' +
                ' @-moz-keyframes roll { from { -moz-transform: rotate(0deg) } to { -moz-transform: rotate(360deg) }}' +
                ' @keyframes roll {from { transform: rotate(0deg) } to { transform: rotate(360deg) }}' +
                ' body { -moz-animation-name: roll; -moz-animation-duration: 4s; -moz-animation-iteration-count: 1; ' +
                '-webkit-animation-name: roll; -webkit-animation-duration: 4s; -webkit-animation-iteration-count: 1;}';
            document.getElementsByTagName('head')[0].appendChild(s);
        }());
        return false;
    });
});
