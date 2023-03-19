import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {

    console.log("Button: props are", props);

    return (
        <button type={props.type} disabled={!props.disabled && '""'} onClick={props.btnAction} className={styles[props.buttonStyle]}>{props.children}</button>       
    )


}

export default Button;