angular.module('wp', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {
        console.log($routeProvider);

        $routeProvider
            .when('/', {
                templateUrl: localized.partials + 'blogs.php',
                controller: 'Main'
            })
            .when('/:slug', {
                templateUrl: localized.partials + 'blog-single.php',
                controller: 'Content'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    .controller('Main', function($scope, $http, $routeParams) {
        $http.get('angular/wp-json/wp/v2/posts?_embed').then(function(res){
            $scope.posts = res.data;
            // debugger;
            console.log(res);
        },function(){

            }

        );
    })

    .controller('Content',
        ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
            $http.get('angular/wp-json/wp/v2/posts/?filter[name]=' + $routeParams.slug).success(function(res){
                $scope.post = res[0];
            });
        }
        ]
    );