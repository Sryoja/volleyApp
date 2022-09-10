import React from 'react';
import InputType from "./fieldTypes/InputType";

function FormikField(props) {

    const {fieldType, ...rest} = props

    switch (fieldType) {
        case "input": return <InputType {...rest}/>
        default: return null;
    }
}

export default FormikField;