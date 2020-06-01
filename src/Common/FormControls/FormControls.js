import React from 'react';
import './FormControls.scss'

const FormControl = ({ input, meta, child, ...props }) => {
    const showError = meta.error && meta.touched;
    return (
        <div className="formControl error">
            <div>
                {props.children}
            </div>
            {showError && <span> {meta.error}</span>}
        </div >
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
    )
}