(function() {
    var app = angular.module('App');

    app.controller('BlogCtrl', function ($scope, $log, $sce, $route, blogService) {
        var promise = blogService.getData();

        promise.then(function(res) {
            angular.forEach(res.articles, function(val, key) {
                res.articles.text = $sce.trustAsHtml(val.text);
            });

            $scope.blog = res.articles;
        });

    });
}());
