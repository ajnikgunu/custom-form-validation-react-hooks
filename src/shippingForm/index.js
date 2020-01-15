import React, { useState } from "react";
import { hasValidData, hasValidEmail } from "../utils/formUtils";
import InitialState from "./initialState";
import TextField from "../form-components/textField";
import Button from "../form-components/button";

const ShippingForm = () => {
  const inputArray = [];
  const [data, setData] = useState(InitialState);

  const [valid, setValid] = useState(false);

  for (const key in data) {
    inputArray.push({
      id: key,
      inputInfo: data[key]
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
  };

  const changedHandler = (event, id) => {
    const formCopy = { ...data };
    const formElement = { ...formCopy[id] };
    formElement.value = event.target.value;
    formElement.valid = hasValidData(formElement.value, formElement.validity);
    formElement.emailValid = hasValidEmail(
      formElement.value,
      formElement.validity
    );
    formElement.touched = true;
    formCopy[id] = formElement;
    setData(formCopy);

    let isValid = true;
    for (const id in formCopy) {
      isValid = formCopy[id].valid && isValid;
    }
    setValid(isValid);
  };

  return (
    <div className="App">
      <div className="r-checkout-component__form-row" />
      <form onSubmit={handleSubmit}>
        {inputArray.map(element => (
          <TextField
            key={element.id}
            elementConfig={element.inputInfo.elementConfig}
            touched={element.inputInfo.touched}
            check={element.inputInfo.validity}
            valid={element.inputInfo.valid}
            checkValidity={element.inputInfo.checkValidity}
            validEmailFormat={element.inputInfo.emailValid}
            changed={event => changedHandler(event, element.id)}
            value={element.inputInfo.value}
            errorMsgs={element.inputInfo.errorMsgs}
          />
        ))}
        <Button disabled={!valid}>Submit Form</Button>
      </form>
    </div>
  );
};

export default ShippingForm;
