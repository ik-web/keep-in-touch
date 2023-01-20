import classes from "./CustomHint.module.scss";

export const CustomHint = ({ children }) => {
  return (
    <h2 className={classes.message}>
      {children}
    </h2>
  )
};
