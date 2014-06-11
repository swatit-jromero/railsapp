;var appModule = (function($) {

    var _signinform = $('form#sign_in_user');
    var _signupform = $('form#sign_up_user');

    var _bindEvent = function(_elm, _action, _callback) {

        _elm.bind(_action, function(_evt, _data, _status, _xhr) {
            
            _evt.preventDefault();

            if(_callback) _callback(_data)

            return false;
        });
    };

    var _showMessage = function(_text, _alerttype) {

        setTimeout(function() {
                $.bootstrapGrowl(_text, {
                    type: _alerttype,
                    align: 'center',
                    width: 'auto',
                    delay: 5000,
                    allow_dismiss: false
                });
            }, 200);
    };

    var _formActionEvent = function(_elm, _text, _isregistration) {

        _bindEvent(_elm, 'ajax:success', function(_data) {

            if (_data.success) {

                if(_isregistration) {

                    _signupform.find('input').val('');
                    _showMessage('User has been created successfully!', 'success');

                } else
                    window.location = '/admin';
            } else {

                if($('div.bootstrap-growl').length > 0) return;

                _text = (_data.error) ? _data.error : _text;

                _showMessage(_text, 'danger');
            }
        });
    };

    return {
        init: function() {
            $(document).ready(function() {
                appModule.documentReady();
            });
        },
        documentReady: function() {

            var _text = '<strong>Login failure!</strong><p>Please check your login credentials.</p>';

            _formActionEvent(_signinform, _text);

            _text = '<strong>Register failure!</strong><p>Please fill all fields of the form with valid information.</p>';

            _formActionEvent(_signupform, _text, true);
        }
    };
})(jQuery);

appModule.init();