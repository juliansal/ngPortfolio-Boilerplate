var app = angular.module('App');

var blogService = function($http) {
    return {
        getData: function() {
            return $http.get('views/blog/blog.json')
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

app.service('blogService', blogService);
