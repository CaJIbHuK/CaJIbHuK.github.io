angular
    .module('common')
    .factory('Email', function () {
    var Email = (function () {
        function Email(email) {
            this.value = email;
            this.is_valid = Email.validate(email);
        }
        Email.validate = function (value) {
            return Email.EMAIL_REGEXP.test(value);
        };
        Email.prototype.toString = function () {
            return this.value;
        };
        Email.EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return Email;
    }());
    return Email;
});
