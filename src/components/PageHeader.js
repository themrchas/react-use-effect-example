import React from 'react';

import Button from '../components/UI/Button';

import styles from './PageHeader.module.css'




//Menu options in header created as a variable
const menuOptions = 
   
            <nav className={styles.nav}>
                    <ul>
                        <li><Button label="Users" />Users</li>
                        <li><Button label="Admin" />Admin</li>
                        <li><Button label="Login" btnAction={""}/>Logout</li>
                    </ul>
            </nav>;


  
const PageHeader = (props) => {

  //  alert(`props.isLoggedIn is ${props.isLoggedIn}`)

    return (

        <React.Fragment>
        

        <div className={styles.header}>
            <h1>JSX Example</h1>

            {/* If user is logged in show the header menu items */}
            {props.isLoggedIn && menuOptions }
         
        </div>

        {/* If user is not logged in display login modal 
        { ! props.isLoggedIn && <Login />}*/}

        </React.Fragment>

    );


}

export default PageHeader;