import classes from "./SmallAvatar.module.scss";

export const SmallAvatar = ({ src, styles }) => {
  return (
    <img
      src={src}
      alt="User avatar"
      className={`${classes.img} ${styles}`}
    />
  );
};
