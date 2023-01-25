import classes from "./CustomButton.module.scss";

export const CustomButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
};
