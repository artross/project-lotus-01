/*(function($) {
    var $window = $(window);

    function resize() {
        if ($window.width() <= 480) {
            $('.mobile-off').addClass('hidden');
            $('.mobile-only').removeClass('hidden');
        } else {
        	$('.mobile-off').removeClass('hidden');
        	$('.mobile-only').addClass('hidden');
        }
    }

    $window.resize(resize).trigger('resize');

})(jQuery);*/