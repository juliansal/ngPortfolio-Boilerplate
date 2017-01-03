(function() {
    var app = angular.module('App');

    app.controller('AboutCtrl', function ($scope, $log, $sce, aboutService) {
        var promise = aboutService.getData();

        promise.then(function(res) {
            $scope.about = res;
            $scope.bindContent = $sce.trustAsHtml($scope.about.content);
        });
    });
}());
