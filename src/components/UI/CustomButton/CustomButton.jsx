import classes from "./CustomButton.module.scss";

export const CustomButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};
