angular.module("videoclub")
    .config(['$routeProvider',
        function config($routeProvider) {
              $routeProvider.
                when('/movies', {
                  template: '<movie-list></movie-list>'
                }).
                when('/movies/:movieId', {
                  template: '<movie-details></movie-details>'
                }).
                otherwise({
                    redirectTo: '/movies'
                });
        }
    ])
