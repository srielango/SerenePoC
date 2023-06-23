import { MovieKind } from "../Web/Modules.MovieDB.Movie.MovieKind";
import { GenreListFormatter } from "@/MovieDB/Movie/GenreListFormatter";

export class MovieColumns {
    static columnsKey = 'MovieDB.Movie';
}

[MovieKind, GenreListFormatter]; // referenced types