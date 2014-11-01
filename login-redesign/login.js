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
            $('#logo .action').attr('data-alttext', $('#logo .action').text());
            $('#logo .action').text(newvalue);
            $('head > title').text($('#logo h1').text());
        });
        var name = 'status_message';
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        $('#status-message').text(results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")));
    });
})(jQuery);

