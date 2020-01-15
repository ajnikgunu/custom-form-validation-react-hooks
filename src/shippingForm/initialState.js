const InitialState = {
  firstName: {
    type: "input",
    elementConfig: {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name"
    },
    value: "",
    validity: {
      required: true
    },
    checkValidity: {
      isEmpty: false
    },
    valid: false,
    touched: false,
    errorMsgs: {
      emptyErrorMsg: "Please Enter First Name",
      invalidErrorMsg: ""
    }
  },
  lastName: {
    type: "input",
    elementConfig: {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name"
    },
    checkValidity: {
      isEmpty: false
    },
    value: "",
    validity: {
      required: true
    },
    valid: false,
    touched: false,
    errorMsgs: {
      emptyErrorMsg: "Please Enter Last Name",
      invalidErrorMsg: ""
    }
  },
  email: {
    type: "input",
    elementConfig: {
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email"
    },
    value: "",
    validity: {
      required: true,
      requiredEmailFormat: true,
      missMatchEmail: true
    },
    checkValidity: {
      isEmpty: false,
      isValidEmail: false,
      isSameValue: false
    },
    valid: false,
    emailValid: false,
    touched: false,
    errorMsgs: {
      emptyErrorMsg: "Please Enter Email",
      invalidErrorMsg: "Email Address is Invalid",
      missMatchErrorMsg: "Email and Confirm Email are not same"
    }
  },
  confirmEmail: {
    type: "input",
    elementConfig: {
      name: "confirmEmail",
      type: "text",
      placeholder: "Confirm Email",
      label: "Confirm Email"
    },
    value: "",
    validity: {
      required: true,
      missMatchEmail: true,
      requiredEmailFormat: true
    },
    checkValidity: {
      isEmpty: false,
      isValidEmail: false,
      isSameValue: false
    },
    valid: false,
    emailValid: false,
    touched: false,
    errorMsgs: {
      emptyErrorMsg: "Please Enter Confirm Email",
      invalidErrorMsg: "Confirm Address is Invalid",
      missMatchErrorMsg: "Email and Confirm Email are not same"
    }
  }
};

export default InitialState;
