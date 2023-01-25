import classNames from "classnames";

import classes from "./CustomInput.module.scss";

export const CustomInput = ({
  isError = false,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(
        `${classes.input} ${className}`, 
        {
          [classes.input_error]: isError,
        }
      )}
    />
  );
};
