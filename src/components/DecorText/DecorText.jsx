import classes from "./DecorText.module.scss";

export const DecorText = ({ children }) => {
  return (
    <span className={classes.decorTitle}>
      {children}
    </span>
  );
};
