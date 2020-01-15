import { isString, isEmpty } from "lodash";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isStringWithValue = str => isString(str) && !isEmpty(str);

export const hasValidEmail = (value, rules) => {
  let isValid = false;
  if (!rules) return true;
  if (rules.requiredEmailFormat) isValid = EMAIL_REGEX.test(value);

  console.log("here now: ", isValid);
  return isValid;
};

export const hasValidData = (value, rules) => {
  let isValid = false;
  if (!rules) return true;
  if (rules.required) isValid = isStringWithValue(value);
  return isValid;
};
