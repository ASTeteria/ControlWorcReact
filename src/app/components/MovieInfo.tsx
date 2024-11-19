// import React from 'react';
// import { Genre } from '../types/movie';
// import GenreBadge from './GenreBadge';
// import StarsRating from './StarsRating';
// import PosterPreview from './PosterPreview';
//
// interface Props {
//     title: string;
//     overview: string;
//     posterPath: string;
//     rating: number;
//     genres: Genre[];
// }
//
// const MovieInfo: React.FC<Props> = ({ title, overview, posterPath, rating, genres }) => (
//     <div className="movie-info">
//         <PosterPreview imagePath={posterPath} />
//         <div className="movie-details">
//             <h1>{title}</h1>
//             <StarsRating rating={rating} />
//             <div className="movie-genres">
//                 {genres.map((genre) => (
//                     <GenreBadge key={genre.id} name={genre.name} />
//                 ))}
//             </div>
//             <p className="movie-overview">{overview}</p>
//         </div>
//     </div>
// );
//
// export default MovieInfo;
import React from 'react';
import GenreBadge from './GenreBadge';

interface Props {
    title: string;
    overview: string;
    posterPath: string;
    rating: number;
    genres: { id: number; name: string }[];
}

const MovieInfo: React.FC<Props> = ({ title, overview, posterPath, rating, genres }) => (
    <div className="movie-info">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="movie-poster" />
        <div className="movie-details">
            <h1>{title}</h1>
            <p>Rating: {rating.toFixed(1)}</p>
            <div className="movie-genres">
                {genres.map((genre) => (
                    <GenreBadge key={genre.id} name={genre.name} />
                ))}
            </div>
            <p className="movie-overview">{overview}</p>
        </div>
    </div>
);

export default MovieInfo;
