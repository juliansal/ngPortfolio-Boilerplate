(function() {
    var app = angular.module('App');

    var aboutService = function($http) {
        return {
            getData: function() {
                return $http.get('views/about/about.json')
                    .then(function(res) {
                        console.log(res.data);
                        return res.data;
                    })
                    .catch(function(err) {
                        console.log(err.statusText);
                    });
            }
        };
    };

    app.service('aboutService', aboutService);
}());
