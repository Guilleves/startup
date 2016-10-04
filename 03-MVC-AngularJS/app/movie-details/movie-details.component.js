angular.module('movieDetails')
.component('movieDetails', {
    templateUrl: "./movie-details/movie-details.template.html",
    controller: ['$http', '$routeParams',
        function MovieDetailsController($http, $routeParams){
            $http.get('movies/' + $routeParams.movieId + ".json")
                 .then(response => {
                     this.movie = response.data;
                 })
        }

    ]
});
