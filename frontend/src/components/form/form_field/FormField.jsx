import React from "react";
import FormField from "./FormField";


function FormField({
    label,
    name,
    onChange,
    placeholder,
    required,
    type = "input",
    value,
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
  
  export default FormField;