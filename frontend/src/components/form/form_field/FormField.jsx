import React from "react";
import PropTypes from 'prop-types';


function FormField({
    label,
    name,
    onChange,
    placeholder,
    required,
    type,
    value
}) {
    return (
        <div className="FormField">
            {label && <label htmlFor={name}>
                {label}
            </label>}
            <input
                id = {name}
                name = {name}
                onChange = {onChange}
                placeholder = {placeholder}
                required = {required}
                type = {type}
                value = {value}
            />
      </div>
    );
}

FormField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.any
};

FormField.defaultProps = {
    label: '',
    onChange: () => {},
    placeholder: '',
    required: true,
    type: 'text'
};

export default FormField;