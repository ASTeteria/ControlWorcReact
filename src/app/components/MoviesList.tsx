// // import React from 'react';
// // import { Movie } from '../types/movie';
// // import MoviesListCard from './MoviesListCard';
// //
// // interface Props {
// //     movies: Movie[];
// // }
// //
// // const MoviesList: React.FC<Props> = ({ movies }) => (
// //     <div className="movies-list">
// //         {movies.map((movie) => (
// //             <MoviesListCard key={movie.id} movie={movie} />
// //         ))}
// //     </div>
// // );
// //
// // export default MoviesList;
// import React from 'react';
// import { Movie } from '../types/movie';
// import styles from '@/app/styles/MoviesList.module.css';
// import MoviesListCard from './MoviesListCard';
//
// interface Props {
//     movies: Movie[];
// }
//
// const MoviesList: React.FC<Props> = ({ movies }) => {
//     return (
//         <div className={styles.moviesList}>
//             {movies.map((movie) => (
//                 <MoviesListCard key={movie.id} movie={movie} />
//             ))}
//         </div>
//     );
// };
//
// export default MoviesList;
import React, {FC} from 'react';
import { Movie } from '../types/movie';
import styles from '@/app/styles/MoviesList.module.css';
import MoviesListCard from './MoviesListCard';

interface Props {
    movies: Movie[];
}

const MoviesList: FC<Props> = ({ movies }) => {
    return (
        <div className={styles.moviesList}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;
