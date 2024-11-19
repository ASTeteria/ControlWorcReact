// import React from 'react';
//
// interface Props {
//     currentPage: number;
//     totalPages: number;
//     onPageChange: (page: number) => void;
// }
//
// const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
//     const handlePrev = () => {
//         if (currentPage > 1) onPageChange(currentPage - 1);
//     };
//
//     const handleNext = () => {
//         if (currentPage < totalPages) onPageChange(currentPage + 1);
//     };
//
//     return (
//         <div className="pagination">
//             <button onClick={handlePrev} disabled={currentPage === 1}>&laquo; Previous</button>
//             <span>
//         Page {currentPage} of {totalPages}
//       </span>
//             <button onClick={handleNext} disabled={currentPage === totalPages}>Next &raquo;</button>
//         </div>
//     );
// };
//
// export default Pagination;
import React, {FC} from 'react';
import styles from '@/app/styles/Pagination.module.css';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
            <button
                className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
