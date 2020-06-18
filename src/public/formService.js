(function () {

'use strict';

angular.module('public')
.service('formService', formService);

formService.$inject = ['$http']
function formService($http) {
    var service = this;

    service.formdata = false;

    service.getFav = function(short_name) {
        var response = $http({
            url: ('https://mohitlaad-iitd.herokuapp.com/menu_items/' + short_name + '.json')
        })

        return response;
    }




};

})();