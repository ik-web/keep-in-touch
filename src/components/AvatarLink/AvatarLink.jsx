import classes from "./AvatarLink.module.scss";

export const AvatarLink = ({ src }) => {
  return (
    <img
      src={src}
      alt="User avatar"
      className={classes.avatar}
    />
  );
};
