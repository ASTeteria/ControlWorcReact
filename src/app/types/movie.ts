// export interface Movie {
//     id: number;
//     title: string;
//     poster_path: string;
//     overview: string;
//     vote_average: number;
//     genre_ids: number[];
// }
//
// export interface Genre {
//     id: number;
//     name: string;
// }
export interface Genre {
    id: number;
    name: string;
}

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    genre_ids: number[]; // используется на списке фильмов
    genres?: Genre[]; // используется на детальной странице
}
