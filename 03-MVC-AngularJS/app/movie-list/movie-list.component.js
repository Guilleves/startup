angular.module('movieList')
.component('movieList', {
    templateUrl: "./movie-list/movie-list.template.html",
    controller: ['$http',
        function MovieListController($http) {
            this.order = "name";
            $http.get('movies/movies.json').then(response => {
                this.movies = response.data;
            });
        }
    ]
});
