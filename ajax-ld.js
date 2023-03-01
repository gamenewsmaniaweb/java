jQuery(document).ready(function($) {
    function loadContent(link) {
        $.ajax({
            url: link,
            data: {
                page: 2
            },
            success: function(data) {
                // Replace the content of the current page with the loaded content
                $('body').html(data);

                // Change the URL displayed in the browser bar
                history.pushState(null, null, link);
            },
            error: function() {
                // Show an error message if the page fails to load
                alert('Sorry, the page could not be loaded.');
            }
        });
    }

    $('a').click(function(e) {
        var link = $(this).attr('href');
        if (location.hostname === this.hostname && link.indexOf("#") !== 0 && !$(this).hasClass('no-ajax')) {
            e.preventDefault();
            loadContent(link);
        }
    });

    $(window).on('popstate', function() {
        var link = location.pathname;
        loadContent(link);
    });
});