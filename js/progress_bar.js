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
                $(".progress-bar").css("width", (($(window).scrollTop() / ($(document).height() - $(window).outerHeight())) * 100) + "%");
            });
        });
    };
})(jQuery);