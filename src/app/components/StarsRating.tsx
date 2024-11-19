import React from 'react';

interface Props {
    rating: number;
}

const StarsRating: React.FC<Props> = ({ rating }) => {
    const stars = Math.round(rating / 2);
    return (
        <div className="stars-rating">
            {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </div>
    );
};

export default StarsRating;
