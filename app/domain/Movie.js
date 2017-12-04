export class Movie {
    _id: number;
    _title: string;
    _year: string;
    _rating: number;
    _genres: string;
    _cast: string;
    _director: string;

    static _currentId: number = 0;

    constructor(title: string, year: string, rating: number, genres: string, cast: string, director:string) {
        this._title = title;
        this._year = year;
        this._rating = rating;
        this._genres = genres;
        this._cast = cast;
        this._director = director;
        Movie._currentId += 1;
        this._id = Movie._currentId;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get year(): string {
        return this._year;
    }

    set year(value: string) {
        this._year = value;
    }

    get rating(): number {
        return this._rating;
    }

    set rating(value: number) {
        this._rating = value;
    }

    get genres(): string {
        return this._genres;
    }

    set genres(value: string) {
        this._genres = value;
    }

    get cast(): string {
        return this._cast;
    }

    set cast(value: string) {
        this._cast = value;
    }

    get director(): string {
        return this._director;
    }

    set director(value: string) {
        this._director = value;
    }
}