import React, {FC} from 'react';

interface Props {
    imagePath: string;
}

const PosterPreview: FC<Props> = ({ imagePath }) => (
    <img
        src={`https://image.tmdb.org/t/p/w500${imagePath}`}
        alt="Movie Poster"
        className="poster"
    />
);

export default PosterPreview;
