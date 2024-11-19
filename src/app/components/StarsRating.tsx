import React, {FC} from 'react';

interface Props {
    rating: number;
}

const StarsRating: FC<Props> = ({ rating }) => {
    const stars = Math.round(rating / 2);
    return (
        <div className="stars-rating">
            {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </div>
    );
};

export default StarsRating;
