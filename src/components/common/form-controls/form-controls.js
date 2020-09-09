import React from "react";
import './form-controls.css';

export const Textarea = ({meta, input, ...restProps}) => {

    const hasError = meta.touched && meta.error;

    return (
        <>
            <textarea {...input} {...restProps} className={hasError ? 'error' : ''}/>
            {hasError && <span className='error-message'>{meta.error}</span>}
        </>
    )
}

export const Input = ({meta, input, ...restProps}) => {

    const hasError = meta.touched && meta.error;

    return (
        <>
            <input {...input} {...restProps} className={hasError ? 'error' : ''}/>
            {hasError && <span className='error-message'>{meta.error}</span>}
        </>
    )
}