import React from 'react';
import Form from './Form';


function Form({
    children,
    className,
    form
}) {
    return (
        <form
            className = {className}
            name = {form}
        >
            {children}
        </form>
    );
}

export default Form;