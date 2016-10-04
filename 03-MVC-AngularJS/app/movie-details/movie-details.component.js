angular.module('movieDetails')
.component('movieDetails', {
    templateUrl: "./movie-details/movie-details.template.html",
    controller: ['$routeParams',
        function MovieDetailsController($routeParams){
            this.movieId = $routeParams.phoneId;
        }
    ]
});
