var app = angular.module('App');

app.controller('BlogCtrl', function ($scope, $log, blogService) {
    var promise = blogService.getData();

    promise.then(function(res) {
        $scope.blog = res.articles;
    });
});
