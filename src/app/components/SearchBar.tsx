// import React, { useState } from 'react';
//
// interface Props {
//     onSearch: (query: string) => void;
// }
//
// const SearchBar: React.FC<Props> = ({ onSearch }) => {
//     const [query, setQuery] = useState('');
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (query.trim()) {
//             onSearch(query);
//         }
//     };
//
//     return (
//         <form className="search-bar" onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Search movies..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="search-input"
//             />
//             <button type="submit" className="search-button">Search</button>
//         </form>
//     );
// };
//
// export default SearchBar;
import React, {FC, useState} from 'react';
import styles from '@/app/styles/SearchBar.module.css';

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for movies..."
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
