// import React from 'react';
//
// const UserInfo: React.FC = () => (
//     <div className="user-info">
//         <div className="user-avatar">
//             <img
//                 src="https://via.placeholder.com/40"
//                 alt="User Avatar"
//                 className="avatar"
//             />
//         </div>
//         <span className="user-name">Guest</span>
//     </div>
// );
//
// export default UserInfo;
import React from 'react';
import styles from '@/app/styles/UserInfo.module.css';

const UserInfo: React.FC = () => {
    const userName = "John Doe"; // Здесь может быть динамическое имя

    return (
        <div className={styles.userInfo}>
            <div className={styles.userCircle}>JD</div>
            <span className={styles.userName}>{userName}</span>
        </div>
    );
};

export default UserInfo;