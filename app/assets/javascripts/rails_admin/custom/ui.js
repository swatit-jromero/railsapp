;(function($) {

    $(document).on('rails_admin.dom_ready', function() {

        _rootlinks = $('ul.root_links');
        _logoutlink = $('a.logout-link');
        
        if(_rootlinks.length > 0 && _logoutlink.length == 0) {

            var _link = $('<a/>').attr({
                class: 'logout-link',
                href: '/users/sign_out',
                rel: 'nofollow',
                'data-method': 'delete'
            }).append('Logout');

            var _li = $('<li/>');

            _link.appendTo(_li);
            _li.appendTo(_rootlinks);
        }
    });
})(jQuery);