import classes from "./CustomButton.module.scss";

export const CustomButton = ({ name, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${className}`}
    >
      {name}
    </button>
  );
};
