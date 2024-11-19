import React from 'react';

interface Props {
    name: string;
}

const GenreBadge: React.FC<Props> = ({ name }) => (
    <span className="badge">{name}</span>
);

export default GenreBadge;
// import React from 'react';
// import styles from '@/app/styles/GenreBadge.module.css';
// import { Genre } from '../types/movie';
//
// interface Props {
//     genre: Genre;
//     isSelected: boolean;
//     onClick: () => void;
// }
//
// const GenreBadge: React.FC<Props> = ({ genre, isSelected, onClick }) => {
//     return (
//         <button
//             className={`${styles.genreBadge} ${isSelected ? styles.selected : ''}`}
//             onClick={onClick}
//         >
//             {genre.name}
//         </button>
//     );
// };
//
// export default GenreBadge;
