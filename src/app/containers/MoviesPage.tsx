'use client'

//
// import React, { useEffect, useState } from 'react';
// import { getMovies, getGenres } from '../utils/api';
// import MoviesList from '../components/MoviesList';
// import { Movie, Genre } from '../types/movie';
//
// const MoviesPage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [genres, setGenres] = useState<Genre[]>([]);
//
//     useEffect(() => {
//         const fetchMovies = async () => {
//             const data = await getMovies(1);
//             setMovies(data.results);
//         };
//
//         const fetchGenres = async () => {
//             const data = await getGenres();
//             setGenres(data.genres);
//         };
//
//         fetchMovies();
//         fetchGenres();
//     }, []);
//
//     return (
//         <div>
//             <h2>Movies</h2>
//             <MoviesList movies={movies} />
//         </div>
//     );
// };
//
// export default MoviesPage;
// import React, { useEffect, useState } from 'react';
// import { getMovies, searchMovies } from '../utils/api';
// import MoviesList from '../components/MoviesList';
// import SearchBar from '../components/SearchBar';
// import Pagination from '../components/Pagination';
// import { Movie } from '../types/movie';
//
// const MoviesPage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [query, setQuery] = useState('');
//
//     useEffect(() => {
//         const fetchMovies = async () => {
//             const data = query
//                 ? await searchMovies(query)
//                 : await getMovies(currentPage);
//
//             setMovies(data.results);
//             setTotalPages(data.total_pages);
//         };
//
//         fetchMovies();
//     }, [currentPage, query]);
//
//     const handleSearch = (searchQuery: string) => {
//         setQuery(searchQuery);
//         setCurrentPage(1); // Сбросить на первую страницу
//     };
//
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     return (
//         <div>
//             <h2>Movies</h2>
//             <SearchBar onSearch={handleSearch} />
//             <MoviesList movies={movies} />
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//             />
//         </div>
//     );
// };
//
// export default MoviesPage;

//
// import React, { useEffect, useState } from 'react';
// import { getMovies, getGenres } from '../utils/api';
// import MoviesList from '../components/MoviesList';
// import Pagination from '../components/Pagination';
// import { Movie, Genre } from '../types/movie';
//
// const MoviesPage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//     // Загружаем список жанров при монтировании компонента
//     useEffect(() => {
//         const fetchGenres = async () => {
//             const genreData = await getGenres();
//             setGenres(genreData.genres);
//         };
//
//         fetchGenres();
//     }, []);
//
//     // Загружаем список фильмов при изменении страницы или выбранного жанра
//     useEffect(() => {
//         const fetchMovies = async () => {
//             const data = await getMovies(currentPage, selectedGenre);
//             setMovies(data.results);
//             setTotalPages(data.total_pages);
//         };
//
//         fetchMovies();
//     }, [currentPage, selectedGenre]);
//
//     // Обработчик выбора жанра
//     const handleGenreSelect = (genreId: number | null) => {
//         setSelectedGenre(genreId);
//         setCurrentPage(1); // Сбрасываем страницу на первую при смене жанра
//     };
//
//     // Обработчик изменения страницы
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     return (
//         <div>
//             <h2>Movies</h2>
//
//             {/* Список жанров */}
//             <div className="genre-list">
//                 <button
//                     className={`genre-button ${selectedGenre === null ? 'active' : ''}`}
//                     onClick={() => handleGenreSelect(null)}
//                 >
//                     All
//                 </button>
//                 {genres.map((genre) => (
//                     <button
//                         key={genre.id}
//                         className={`genre-button ${selectedGenre === genre.id ? 'active' : ''}`}
//                         onClick={() => handleGenreSelect(genre.id)}
//                     >
//                         {genre.name}
//                     </button>
//                 ))}
//             </div>
//
//             {/* Список фильмов */}
//             <MoviesList movies={movies} />
//
//             {/* Пагинация */}
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//             />
//         </div>
//     );
// };
//
// export default MoviesPage;

// 'use client'
// import React, { useEffect, useState } from 'react';
// import { getMovies, getGenres } from '../utils/api';
// import MoviesList from '../components/MoviesList';
// import Pagination from '../components/Pagination';
// import SearchBar from '../components/SearchBar';
// import { Movie, Genre } from '../types/movie';
//
// const MoviesPage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//     // Загружаем список жанров
//     useEffect(() => {
//         const fetchGenres = async () => {
//             const genreData = await getGenres();
//             setGenres(genreData.genres);
//         };
//
//         fetchGenres();
//     }, []);
//
//     // Загружаем фильмы при изменении страницы, выбранного жанра или поискового запроса
//     useEffect(() => {
//         const fetchMovies = async () => {
//             const data = await getMovies(currentPage, selectedGenre, searchQuery);
//             setMovies(data.results);
//             setTotalPages(data.total_pages);
//         };
//
//         fetchMovies();
//     }, [currentPage, selectedGenre, searchQuery]);
//
//     // Обработчик выбора жанра
//     const handleGenreSelect = (genreId: number | null) => {
//         setSelectedGenre(genreId);
//         setCurrentPage(1); // Сбрасываем на первую страницу при изменении жанра
//     };
//
//     // Обработчик изменения страницы
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     // Обработчик поиска
//     const handleSearch = (query: string) => {
//         setSearchQuery(query);
//         setCurrentPage(1); // Сбрасываем на первую страницу при поиске
//     };
//
//     return (
//         <div>
//             <h2>Movies</h2>
//
//             {/* Поиск */}
//             <SearchBar onSearch={handleSearch} />
//
//             {/* Список жанров */}
//             <div className="genre-list">
//                 <button
//                     className={`genre-button ${selectedGenre === null ? 'active' : ''}`}
//                     onClick={() => handleGenreSelect(null)}
//                 >
//                     All
//                 </button>
//                 {genres.map((genre) => (
//                     <button
//                         key={genre.id}
//                         className={`genre-button ${selectedGenre === genre.id ? 'active' : ''}`}
//                         onClick={() => handleGenreSelect(genre.id)}
//                     >
//                         {genre.name}
//                     </button>
//                 ))}
//             </div>
//
//             {/* Список фильмов */}
//             <MoviesList movies={movies} />
//
//             {/* Пагинация */}
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//             />
//         </div>
//     );
// };

// export default MoviesPage;


// import React, { useEffect, useState } from 'react';
// import { getMovies, getGenres, searchMovies } from '../utils/api';
// import MoviesList from '../components/MoviesList';
// import Pagination from '../components/Pagination';
// import SearchBar from '../components/SearchBar';
// import { Movie, Genre } from '../types/movie';
// import styles from '@/app/styles/MoviesPage.module.css';
//
// const MoviesPage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//
//
//     useEffect(() => {
//         const fetchGenres = async () => {
//             const genreData = await getGenres();
//             setGenres(genreData.genres);
//         };
//
//         fetchGenres();
//     }, []);
//
//
//
//     useEffect(() => {
//         const fetchMovies = async () => {
//             const data = await getMovies(currentPage, selectedGenre, searchQuery);
//             setMovies(data.results);
//             setTotalPages(data.total_pages);
//         };
//
//         fetchMovies();
//     }, [currentPage, selectedGenre, searchQuery]);
//
//     const handleGenreSelect = (genreId: number | null) => {
//         setSelectedGenre(genreId);
//         setCurrentPage(1);
//     };
//
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     const handleSearch = (query: string) => {
//         setSearchQuery(query);
//         setCurrentPage(1);
//     };
//
//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Movies</h2>
//
//             <SearchBar onSearch={handleSearch} />
//
//             <div className={styles.genreList}>
//                 <button
//                     className={`${styles.genreButton} ${selectedGenre === null ? styles.active : ''}`}
//                     onClick={() => handleGenreSelect(null)}
//                 >
//                     All
//                 </button>
//                 {genres.map((genre) => (
//                     <button
//                         key={genre.id}
//                         className={`${styles.genreButton} ${selectedGenre === genre.id ? styles.active : ''}`}
//                         onClick={() => handleGenreSelect(genre.id)}
//                     >
//                         {genre.name}
//                     </button>
//                 ))}
//             </div>
//
//             <MoviesList movies={movies} />
//
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//             />
//         </div>
//     );
// };
//
// export default MoviesPage;


// import React, { useState, useEffect } from 'react';
// import MoviesList from '../components/MoviesList';
// import SearchBar from '../components/SearchBar';
// import Pagination from '../components/Pagination';
// import GenreBadge from '../components/GenreBadge';
//
// import { Movie, Genre } from '../types/movie';
// import styles from '@/app/styles/MoviesPage.module.css';
// import {getMovies, getMoviesByGenre, searchMovies} from "@/app/utils/api";
//
// const MoviesPage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//
//     // Fetch genres on mount
//     useEffect(() => {
//         fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
//             .then((res) => res.json())
//             .then((data) => setGenres(data.genres))
//             .catch((err) => console.error('Error fetching genres:', err));
//     }, []);
//
//     // Fetch movies when currentPage, searchQuery, or selectedGenre changes
//     useEffect(() => {
//         if (searchQuery) {
//             searchMovies(searchQuery, currentPage).then((data) => {
//                 setMovies(data.results);
//                 setTotalPages(data.total_pages);
//             });
//         } else if (selectedGenre) {
//             getMoviesByGenre(selectedGenre, currentPage).then((data) => {
//                 setMovies(data.results);
//                 setTotalPages(data.total_pages);
//             });
//         } else {
//             getMovies(currentPage).then((data) => {
//                 setMovies(data.results);
//                 setTotalPages(data.total_pages);
//             });
//         }
//     }, [currentPage, searchQuery, selectedGenre]);
//
//     // Handle search input
//     const handleSearch = (query: string) => {
//         setSearchQuery(query);
//         setSelectedGenre(null); // Reset genre when searching
//         setCurrentPage(1);
//     };
//
//     // Handle genre selection
//     const handleGenreSelect = (genreId: number) => {
//         setSelectedGenre(genreId);
//         setSearchQuery(''); // Reset search when selecting a genre
//         setCurrentPage(1);
//     };
//
//     // Handle page change
//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };
//
//     return (
//         <div className={styles.moviesPage}>
//             <SearchBar onSearch={handleSearch} />
//             <div className={styles.genreContainer}>
//                 {genres.map((genre) => (
//                     <GenreBadge
//                         key={genre.id}
//                         genre={genre}
//                         isSelected={genre.id === selectedGenre}
//                         onClick={() => handleGenreSelect(genre.id)}
//                     />
//                 ))}
//             </div>
//             <MoviesList movies={movies} />
//             <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//             />
//         </div>
//     );
// };
//
// export default MoviesPage;


import React, { useEffect, useState } from 'react';
import { getMovies, getGenres, searchMovies } from '../utils/api';
import MoviesList from '../components/MoviesList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { Movie, Genre } from '../types/movie';
import styles from '@/app/styles/MoviesPage.module.css';

const MoviesPage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch genres on mount
    useEffect(() => {
        const fetchGenres = async () => {
            const genreData = await getGenres();
            setGenres(genreData.genres);
        };

        fetchGenres();
    }, []);

    // Fetch movies or search results when currentPage, selectedGenre, or searchQuery changes
    useEffect(() => {
        const fetchMovies = async () => {
            let data;

            if (searchQuery) {

                data = await searchMovies(searchQuery);
            } else {

                data = await getMovies(currentPage, selectedGenre);
            }

            setMovies(data.results);
            setTotalPages(data.total_pages);
        };

        fetchMovies();
    }, [currentPage, selectedGenre, searchQuery]);

    // Handle genre selection
    const handleGenreSelect = (genreId: number | null) => {
        setSelectedGenre(genreId);
        setSearchQuery(''); // Clear search query when a genre is selected
        setCurrentPage(1);
    };

    // Handle search input
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setSelectedGenre(null); // Clear selected genre when searching
        setCurrentPage(1);
    };

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Movies</h2>

            <SearchBar onSearch={handleSearch} />

            <div className={styles.genreList}>
                <button
                    className={`${styles.genreButton} ${selectedGenre === null ? styles.active : ''}`}
                    onClick={() => handleGenreSelect(null)}
                >
                    All
                </button>
                {genres.map((genre) => (
                    <button
                        key={genre.id}
                        className={`${styles.genreButton} ${selectedGenre === genre.id ? styles.active : ''}`}
                        onClick={() => handleGenreSelect(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>

            <MoviesList movies={movies} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default MoviesPage;
