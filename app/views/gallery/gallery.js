var app = angular.module('App');

app.controller('GalleryCtrl', function ($scope, $log, galleryService) {
    var promise = galleryService.getData();

    promise.then(function(res) {
        $scope.images = res;
    });
});
