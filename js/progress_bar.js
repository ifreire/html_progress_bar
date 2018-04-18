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
                $("#vert-progress-bar-left").css("height", percent + "%");
                $("#vert-progress-bar-right").css("height", percent + "%");
                $(".hori-progress-bar").css("width", percent + "%");
            });
        });
    };
})(jQuery);