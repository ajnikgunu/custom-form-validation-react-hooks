import React from "react";

const TextField = props => {
  const {
    elementConfig,
    touched,
    check,
    valid,
    changed,
    value,
    errorMsgs,
    validEmailFormat,
    checkValidity
  } = props;
  let label = "";
  let name = "";
  if (elementConfig) {
    label = elementConfig.label;
    name = elementConfig.name;
  }

  return (
    <div className="r-form__field">
      {label && <div className="r-form__label">{label}</div>}
      <input
        type="text"
        className="r-form__input is-fullwidth"
        name={name}
        onChange={changed}
        value={value}
        {...props.elementConfig}
      />
      {touched && check && !valid && (
        <div className="r-form__error">{errorMsgs.emptyErrorMsg}</div>
      )}
      {touched && check && valid && !validEmailFormat && (
        <div className="r-form__error">{errorMsgs.invalidErrorMsg}</div>
      )}
    </div>
  );
};

export default TextField;
