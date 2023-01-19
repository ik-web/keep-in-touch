import classNames from "classnames";

import classes from "./CustomInput.module.scss";

export const CustomInput = ({ isError = false, ...props }) => {
  return (
    <input
      {...props}
      className={classNames(classes.input, {
        [classes.input_error]: isError,
      })}
    />
  );
};
