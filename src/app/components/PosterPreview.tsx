import React from 'react';

interface Props {
    imagePath: string;
}

const PosterPreview: React.FC<Props> = ({ imagePath }) => (
    <img
        src={`https://image.tmdb.org/t/p/w500${imagePath}`}
        alt="Movie Poster"
        className="poster"
    />
);

export default PosterPreview;
