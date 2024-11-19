// import React from 'react';
// import UserInfo from './UserInfo';
//
// const Header: React.FC = () => (
//     <header className="header">
//         <div className="header-content">
//             <h1>The Movies App</h1>
//             <UserInfo />
//         </div>
//     </header>
// );
//
// export default Header;
import React, {FC} from 'react';
import styles from '@/app/styles/Header.module.css';
import UserInfo from './UserInfo';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                MoviesApp
            </a>
            <div className={styles.userSection}>
                <UserInfo />
            </div>
        </header>
    );
};

export default Header;
