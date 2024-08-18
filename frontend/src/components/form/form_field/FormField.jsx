import React from "react";
import FormField from "./FormField";


function FormField({
    label,
    type,
    name,
    value,
    onChange,
    required
}) {
    return (
        <div className="FormField">
            {label && <label htmlFor={name}>
                {label}
            </label>}
            <input
                type = {type}
                name = {name}
                id = {name}
                value = {value}
                onChange = {onChange}
                required = {required}
            />
      </div>
    );
}
  
  export default FormField;