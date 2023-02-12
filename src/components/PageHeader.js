import React from 'react';

import Button from '../components/UI/Button';

import styles from './PageHeader.module.css'



const Header = () => {

    return (
        <div className={styles.header}>
            <h1>JSX Example</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><Button label="Users" /></li>
                    <li><Button label="Admin" /></li>
                    <li><Button label="Login" /></li>
                </ul>
            </nav>



        </div>

    );


}

export default Header;