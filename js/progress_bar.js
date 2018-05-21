/*!
    DATE  : 2018-04-18
    AUTHOR: Iuri Costa Freire
    EMAIL : iuricostafreire@gmail.com
            Caucaia - Ceará - Brazil
 */

$(function()
{
    $("body").progress_bar();
}),

(function($)
{
    $.fn.progress_bar = function(options)
    {
        return this.each(function()
        {
            $(window).scroll(function(e)
            {
                e.preventDefault();
                var percent = (($(window).scrollTop() / ($(document).height() - $(window).outerHeight())) * 100);
                $(".hori-progress-bar-top-left-to-right").css("width", percent + "%");
                $("#vert-progress-bar-right-top-to-bottom").css("height", percent + "%");
                $(".hori-progress-bar-bottom-right-to-left").css("width", percent + "%");
                $("#vert-progress-bar-left-bottom-to-top").css("height", percent + "%");
            });
        });
    };
})(jQuery);