import {Movie} from "../domain/Movie";

export class MovieRepository {
    movies: Array<Movie>;
    static instance: MovieRepository;

    constructor() {
        this.movies = [];
        this.movies.push(new Movie("The Shawshank redemprion", "1994", 9.2 , "Crime, Drama", " Tim Robbins, Morgan Freeman, Bob Gunton", "Frank Darabont"));
        this.movies.push(new Movie("The Lord of the Rings", "2003", 8.9 , "Adventure, Drama, Fantasy", " Elijah Wood, Viggo Mortensen, Ian McKellen", "Peter Jackson"));
        this.movies.push(new Movie("Inception", "2010", 8.7, "Action, Adventure, Sci-Fi", "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page", "Christopher Nolan"));
        this.movies.push(new Movie("The Matrix", "1999", 8.7, "Action, Sci-Fi", "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss", "Lana Wachowski"));
        this.movies.push(new Movie("Interstellar", "2014", "8.5", "Adventure, Drama, Sci-Fi", "Matthew McConaughey, Anne Hathaway, Jessica Chastain", "Christopher Nolan"));
    }

    static get repository(): MovieRepository {
        return MovieRepository.instance;
    }

    add(movie: Movie): void {
        this.movies.push(movie);
    }

    find(title: string): Movie {
        let movie: Movie;
        let i: number;

        for (i = 0; i < this.movies.length; i++) {
            if (name === this.movies[i].title()) {
                movie = this.movies[i];
                break;
            }
        }

        return movie;
    }

    update(movie: Movie): void {
        let i: number;
        for (i = 0; i < this.movies.length; i++) {
            if (this.movies[i]._id === movie._id) {
                console.log(movie.title);
                console.log(this.movies[i].title);
                this.movies[i]._title = movie.title;
                this.movies[i]._year = movie.year;
                this.movies[i]._genres = movie.genres;
                this.movies[i]._rating = movie.rating;
                this.movies[i]._cast = movie.cast;
                this.movies[i]._director = movie.director;
                break;
            }
        }
    }

    getAll(): Array<Movie> {
        return this.movies;
    }
}

MovieRepository.instance = new MovieRepository();