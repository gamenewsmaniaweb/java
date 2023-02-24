jQuery(document).ready(function($) {
    $('a').click(function(e) {
        e.preventDefault();
    });
});

jQuery(document).ready(function($) {
    $('a').click(function(e) {
        e.preventDefault();

        var link = $(this).attr('href');

        $.ajax({
            url: link,
            data: {
                page: 2
            },
            success: function(data) {
                // Replace the content of the current page with the loaded content
                $('body').html(data);
            }
        });
    });
});
