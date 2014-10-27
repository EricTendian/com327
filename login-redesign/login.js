jQuery.noConflict();
(function ($) {
    $(function () {
        $('html').removeClass('no-js');
        $('#register').click(function (e) {
            if ($(this).is(':checked')) {
                $('#logo #logintext').hide();
                $('#logo #signuptext').show();
            } else {
                $('#logo #logintext').show();
                $('#logo #signuptext').hide();
            }
            var newvalue = $('#logo .action').attr('alttext');
            $('#logo .action').attr('alttext', $('#logo .action').text());
            $('#logo .action').text(newvalue);
            $('head > title').text($('#logo h1').text());
            var newvalue = $('form .submit').attr('alt-value');
            $('form .submit').attr('alt-value', $('form .submit').attr('value'));
            $('form .submit').attr('value', newvalue);
        });
    });
})(jQuery);

