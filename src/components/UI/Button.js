import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {


    return (
        <button type="button" onClick={props.btnAction} className={styles.headerButton}>{props.label}</button>
    )


}

export default Button;