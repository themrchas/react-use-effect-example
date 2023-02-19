import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {

    console.log('in Burron with props',props);

    return (
        <button type={props.type} onClick={props.btnAction} className={styles.headerButton}>{props.children}</button>
    )


}

export default Button;