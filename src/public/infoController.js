(function () {

    'use strict',

        angular.module('public')
            .controller('InfoController', InfoController);

    InfoController.$inject = ["formService"]
    function InfoController(formService) {
        var infoCtrl = this;

        infoCtrl.data = formService.formdata;
        if (infoCtrl.data === false) {
            infoCtrl.signed = false;
        }
        else {
            infoCtrl.signed = true;
            infoCtrl.url = ("../../lastModuleAJS/images/menu/" + infoCtrl.data.category_short_name + "/" + infoCtrl.data.category_short_name + ".jpg");
        }




    };

})();
