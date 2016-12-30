var app = angular.module('App');

app.controller('PortfolioCtrl', function ($scope, $log, portfolioService) {
    var promise = portfolioService.getData();

    promise.then(function(res) {
        $scope.images = res;
    });
});
