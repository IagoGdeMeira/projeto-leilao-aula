import React from 'react';
import PropTypes from 'prop-types';


function FormButton({
  ariaLabel,
  className,
  disabled,
  form,
  onClick,
  text,
  type,
}) {
  return (
    <button
      aria-label = {ariaLabel}
      className = {className}
      disabled = {disabled}
      form = {form}
      onClick = {onClick}
      type = {type}
    >
      {text}
    </button>
  );
}

FormButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

FormButton.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  text: '',
  type: "button",
};

export default FormButton;