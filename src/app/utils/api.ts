

const API_KEY = '13fdb80f9af99c2424e074631605cc57';
const BASE_URL = 'https://api.themoviedb.org/3';

// export const getMovies = async (page: number) => {
//     const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`);
//     return response.json();
// };

// export const getMovies = async (page: number, genreId: number | null) => {
//     const genreFilter = genreId ? `&with_genres=${genreId}` : '';
//     const response = await fetch(
//         `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}${genreFilter}`
//     );
//
//     if (!response.ok) {
//         throw new Error('Failed to fetch movies');
//     }
//
//     return response.json();
// };
export const getMovies = async (page: number, genreId: number | null, query: string) => {
    const genreFilter = genreId ? `&with_genres=${genreId}` : '';
    const searchFilter = query ? `&query=${encodeURIComponent(query)}` : '';
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}${genreFilter}${searchFilter}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }

    return response.json();
};



export const getGenres = async () => {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return response.json();
};

// export const getMovieById = async (id: string) => {
//     const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
//     return response.json();
// };

export const getMovieById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }
    return response.json();
};


export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.json();
};
// export const getMoviesByGenre = async (genreId: number, page: number): Promise<{ results: Movie[]; total_pages: number }> => {
//     const response = await fetch(
//         `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
//     );
//     if (!response.ok) {
//         throw new Error('Failed to fetch movies by genre');
//     }
//     return response.json();
// };