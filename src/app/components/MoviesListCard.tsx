import React, {FC} from 'react';
import Link from 'next/link';
import { Movie } from '../types/movie';
import PosterPreview from './PosterPreview';
import StarsRating from './StarsRating';

interface Props {
    movie: Movie;
}

const MoviesListCard: FC<Props> = ({ movie }) => (
    <Link href={`/pages/${movie.id}`}>
        <div className="movie-card">
            <PosterPreview imagePath={movie.poster_path} />
            <h3>{movie.title}</h3>
            <StarsRating rating={movie.vote_average} />
        </div>
    </Link>
);

export default MoviesListCard;
