import React from "react";
import './form-controls.css';

export const Textarea = ({ meta: { touched, error}, input, ...restProps}) => {

    const hasError = touched && error;

    return (
        <>
            <textarea {...input} {...restProps} className={hasError ? 'error' : ''}/>
            {hasError && <span className='error-message'>{ error }</span>}
        </>
    )
}

export const Input = ({meta: { touched, error}, input, ...restProps}) => {

    const hasError = touched && error;

    return (
        <>
            <input {...input} {...restProps} className={hasError ? 'error' : ''}/>
            {hasError && <span className='error-message'>{ error }</span>}
        </>
    )
}