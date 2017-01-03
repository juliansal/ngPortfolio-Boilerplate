(function() {
    var app = angular.module('App');

    var galleryService = function($http) {
        return {
            getData: function() {
                return $http.get('views/gallery/gallery.json')
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

    app.service('galleryService', galleryService);

}());
