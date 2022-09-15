import React from 'react';
import s from "./primaryButton.module.css";

export const PrimaryButton = ({children, addClassName, ...props}) => {
    let classes = `${s.btn} ${addClassName}`
    return (
        <button
            className={classes}
            {...props}
        >{children}</button>
    );
};
