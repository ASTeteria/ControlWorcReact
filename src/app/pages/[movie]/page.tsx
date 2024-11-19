//
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getMovieById, getGenres } from '../../utils/api';
// import MovieInfo from '../../components/MovieInfo';
// import { Movie, Genre } from '../../types/movie';
//
// const MovieDetails: React.FC = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     const [movie, setMovie] = useState<Movie | null>(null);
//     const [genres, setGenres] = useState<Genre[]>([]);
//
//     useEffect(() => {
//         if (id) {
//             getMovieById(id as string).then(setMovie);
//             getGenres().then((data) => setGenres(data.genres));
//         }
//     }, [id]);
//
//     if (!movie) return <div>Loading...</div>;
//
//     const movieGenres = genres.filter((genre) =>
//         movie.genre_ids.includes(genre.id)
//     );
//
//     return (
//         <MovieInfo
//             title={movie.title}
//             overview={movie.overview}
//             posterPath={movie.poster_path}
//             rating={movie.vote_average}
//             genres={movieGenres}
//         />
//     );
// };
//
// export default MovieDetails;
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMovieById, getGenres } from '../../utils/api';
import MovieInfo from '../../components/MovieInfo';
import { Movie, Genre } from '../../types/movie';

const MovieDetails: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Получаем ID из URL
    const [movie, setMovie] = useState<Movie | null>(null);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return; // Ждем, пока ID будет доступен

            const movieData = await getMovieById(id as string); // Загружаем фильм по ID
            setMovie(movieData);

            const genresData = await getGenres(); // Загружаем жанры для маппинга
            setGenres(genresData.genres);
        };

        fetchData();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    const movieGenres = genres.filter((genre) =>
        movie.genre_ids.includes(genre.id)
    );

    return (
        <MovieInfo
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
            genres={movieGenres}
        />
    );
};

export default MovieDetails;
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getMovieById } from '../../utils/api';
// import MovieInfo from '../../components/MovieInfo';
// import { Movie, Genre } from '../../types/movie';
//
// const MovieDetails: React.FC = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     const [movie, setMovie] = useState<Movie | null>(null);
//
//     useEffect(() => {
//         const fetchMovie = async () => {
//             if (!id) return;
//
//             const movieData = await getMovieById(id as string);
//             setMovie(movieData);
//         };
//
//         fetchMovie();
//     }, [id]);
//
//     if (!movie) return <div>Loading...</div>;
//
//     return (
//         <MovieInfo
//             title={movie.title}
//             overview={movie.overview}
//             posterPath={movie.poster_path}
//             rating={movie.vote_average}
//             genres={movie.genres || []} // Передаем жанры, если они есть
//         />
//     );
// };
//
// export default MovieDetails;
