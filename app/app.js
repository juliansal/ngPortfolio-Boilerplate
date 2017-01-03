(function() {
    var app = angular.module('App', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home/home.html',
            title: 'Home'
        })
        .when('/about', {
            templateUrl: 'views/about/about.html',
            title: 'About'
        })
        .when('/contact', {
            templateUrl: 'views/contact/contact.html',
            title: 'Contact'
        })
        .when('/gallery', {
            templateUrl: 'views/gallery/gallery.html',
            title: 'Gallery'
        })
        .when('/blog', {
            templateUrl: 'views/blog/blog.html',
            title: 'Blog'
        });

    });

    app.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function( event, current, previous) {
            $rootScope.title = current.title;
            $rootScope.includes = current.includes;
        });
    }]);

}());
