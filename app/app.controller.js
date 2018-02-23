'use strict';
angular.module('app')
    .controller('main', function ($scope) {
    var _this = this;
    var generateRandomEmail = function () {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        var length = Math.floor(Math.random() * 10) + 3;
        for (var i = 0; i < length; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@dom.com';
    };
    this.emails = [];
    this.addEmail = function () { return $scope.$broadcast('addEmail', generateRandomEmail()); };
    this.showCount = function () { return alert(_this.emails.length); };
});
