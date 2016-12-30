var app = angular.module('App');

var portfolioService = function($http) {
    return {
        getData: function() {
            return $http.get('views/portfolio/portfolio.json')
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

app.service('portfolioService', portfolioService);
