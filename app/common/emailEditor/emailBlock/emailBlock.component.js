angular.module('common')
    .component('emailBlock', {
    templateUrl: 'app/common/emailEditor/emailBlock/emailBlock.template.html',
    bindings: {
        email: '<',
        onDelete: '&'
    },
    controller: function () {
        var _this = this;
        this.delete = function () { return _this.onDelete({ email: _this.email }); };
    }
});
