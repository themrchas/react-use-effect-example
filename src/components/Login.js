import React, {useRef} from 'react';

import Card from './UI/Card';
import Button from './UI/Button';

import styles from './Login.module.css';





const Login = () => {

    alert('money - in Login!');

    const refUserName = useRef();
    const refUserPassword = useRef();


    const checkValidity = e => {

        alert('money - in Login checkvalid!');

    }

    return (

        <Card className={styles.input}>

            <form onSubmit={checkValidity}>

                {/*  <Input type="text" inputId="username" className={styles.label}>Username</Input> */}
                <label for="logonUsername">Enter user name</label>
                <input type="text" id="logonUsername" ref={refUserName}></input>
                <label for="logonPassword">Enter Password</label>
                <input type="text" id="logonPassword"  ref={refUserPassword}></input>
                <div className={styles.button}>
                    <Button type="submit">Login</Button>
                </div>

            </form>

          </Card>
    )

    



} //Login


export default Login;