import React from "react";
import { omit } from "lodash";

const Button = ({ className, ...rest }) => {
  return <button className={className} {...omit(rest, ["isHidden"])} />;
};

export default Button;
