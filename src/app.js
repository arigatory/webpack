import React from 'react';

import styles from './style.css';

import MyImage from './assets/images/dog.jpg';

const App = ({ title }) => {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <img src={MyImage} alt="Theo" />
        </div>
    );
}

export default App;