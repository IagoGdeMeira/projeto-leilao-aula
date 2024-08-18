import React from 'react';
import FormButton from './FormButton';


function FormButton({ text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default FormButton;
