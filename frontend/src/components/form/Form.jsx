import React from 'react';
import PropTypes from 'prop-types';


function Form({
    children,
    className,
    form,
    onSubmit
}) {
    return (
        <form
            className = {className}
            name = {form}
            onSubmit = {onSubmit}
        >
            {children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    form: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
};

Form.defaultProps = {
    className: '',
    onSubmit: () => {}
};

export default Form;