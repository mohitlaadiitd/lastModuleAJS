(function () {

'use strict',

angular.module('public')
.controller('FormController', FormController);

FormController.$inject = ["formService"]
function FormController(formService) {
    var formCtrl = this;

    formCtrl.error = false;

    formCtrl.show = true;

    formService.formdata = false;
    formCtrl.submit = function () {
        formService.getFav(formCtrl.fav)
        .then(function (response) {
            formCtrl.error = true;
            formCtrl.show = false;
            formService.formdata = response.data;
        })
        .catch(function (error) {
            // console.log(error.data);
            formCtrl.error = true;
        })
    }


};

})();