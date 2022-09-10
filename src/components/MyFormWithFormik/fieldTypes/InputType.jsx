import React from 'react';
import {Field, ErrorMessage} from "formik";
import styles from "./fieldTypes.module.css";

const InputType = (props) => {

    const {label, name, ...rest} = props

    return (
        <div className={styles.formField}>
            <label htmlFor={name} className={styles.titleLabel}>{label}</label>
            <Field
                placeholder={`enter your  ${name}`}
                className={styles.textInput}
                id={name}
                name={name}
                {...rest}/>
            <ErrorMessage name={name} component="div" className={styles.error}/>
        </div>
    );
};

export default InputType;