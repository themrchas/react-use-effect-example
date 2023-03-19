import React, {useRef, useReducer} from 'react';

import Card from './UI/Card';
import Button from './UI/Button';

import styles from './Login.module.css';

const ACTIONS = {
    EMAIL_ADDRESS_VALID: "mailAddressValid",
    PASSWORD_VALID: "passwordValid"
}

const reducer = (state,action) => {

    switch (action.type) {
        case ACTIONS.EMAIL_ADDRESS_VALID: return checkEmailAddress(state,action.payload);
        case ACTIONS.PASSWORD_VALID: return checkPassword(state,action.payload);
        default: return
    }

} //reducer

const checkEmailAddress = (state,emailAddress) => {

    //email address 
    let regex = /^\S{1,}@\S+\.\S{3}$/;
    
    return { passwordValid: state.passwordValid, emailAddressValid: emailAddress.match(regex) }


} //checkLogon

const checkPassword = (state,password) => {

    return { passwordValid: password.length > 5, emailAddressValid: state.emailAddressValidtrue }


} //checkPassword





const Login = (props) => {

    const [state, dispatch]  = useReducer( reducer, {emailAddressValid: false, passwordValid: false });

    const refUserName = useRef();
    const refUserPassword = useRef();


    const checkValidity = e => {

        e.preventDefault();

        let login = refUserName.current.value;
        let password = refUserPassword.current.value

        login = login.trim();
        password = password.trim();

        //console.log(`mvalue of login properties is name ${refUserName.current.value} and password ${refUserPassword.current.value}`);

        //Check that both login and password are valid.  Th test could be combined for efficiency sake.
        dispatch( {type:ACTIONS.PASSWORD_VALID, payload: password } )
        dispatch( {type:ACTIONS.EMAIL_ADDRESS_VALID, payload: login } )

    } //checkValidity

    return (

        <Card className={styles.input}>

            <form onSubmit={checkValidity}>

                {/*  <Input type="text" inputId="username" className={styles.label}>Username</Input> */}
                <label for="logonUsername">Enter user name</label>
                <input type="text" id="logonUsername" ref={refUserName} onInput={checkValidity}></input>
                <label for="logonPassword">Enter Password</label>
                <input type="text" id="logonPassword"  ref={refUserPassword} onInput={checkValidity}></input>
                <Button type="submit" buttonStyle={"loginButton"} disabled={state.emailAddressValid && state.passwordValid}>Login</Button>    
            </form>

          </Card>
    )

    



} //Login


export default Login;