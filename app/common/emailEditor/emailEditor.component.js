angular.module('common')
    .component('emailEditor', {
    templateUrl: 'app/common/emailEditor/emailEditor.template.html',
    bindings: {
        emails: "="
    },
    controller: function ($scope, Email) {
        var _this = this;
        this.reset = function () { return _this.current = ''; };
        this.reset();
        $scope.$on('addEmail', function (e, data) { return _this.addEmail(data); });
        $scope.$on('showCount', function (e) { return console.log(e); });
        this.deleteEmail = function (email) {
            _this.emails = _this.emails.filter(function (e) { return e.toString() !== email.toString(); });
        };
        this.addEmail = function (email) {
            if (!email)
                return;
            if (_this.emails.find(function (e) { return e.toString() === email; }))
                return;
            _this.emails.push(new Email(email));
        };
        this.onBlur = function (event) {
            _this.addEmail(_this.current);
            _this.reset();
        };
        this.onPaste = function (event) {
            event.preventDefault();
            event.clipboardData.getData('text/plain').split(/\s+/g).forEach(function (e) { return _this.addEmail(e); });
            _this.reset();
        };
        this.onKeyDown = function (event) {
            var addCurrent = function () {
                _this.addEmail(_this.current);
                _this.reset();
            };
            var deleteLast = function () { return _this.emails.pop(); };
            var conditions = [
                { condition: function () { return event.keyCode === 13; }, action: addCurrent },
                { condition: function () { return [','].indexOf(event.key) !== -1; }, action: addCurrent },
                { condition: function () { return event.keyCode === 8 && !_this.current.length; }, action: deleteLast },
                { condition: function () { return event.keyCode === 32 && !_this.current.length; }, action: null }
            ];
            var triggered = conditions.find(function (c) { return c.condition(); });
            if (triggered) {
                event.preventDefault();
                triggered.action && triggered.action();
            }
        };
    }
});
