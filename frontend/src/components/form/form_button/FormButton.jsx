import React from 'react';
import FormButton from './FormButton';


function FormButton({
  ariaLabel,
  disabled,
  form,
  onClick,
  text,
  type,
}) {
  return (
    <button
      aria-label = {ariaLabel}
      className = 'FormButton'
      form = {form}
      disabled = {disabled}
      onClick = {onClick}
      type = {type}
    >
      {text}
    </button>
  );
}

export default FormButton;