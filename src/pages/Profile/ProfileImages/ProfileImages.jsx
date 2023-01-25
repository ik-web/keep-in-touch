import { useProfileSelector } from "store/selectors";

import classes from "./ProfileImages.module.scss";

export const ProfileImages = () => {
  const { profile } = useProfileSelector();

  return (
    <div className={classes.images}>
      <img
        src={profile.wallpaper}
        alt="User profile wallpaper"
        className={classes.images__wallpaper}
      />

      <div className={classes.images__avatarContainer}>
        <img
          src={profile.avatar}
          alt="User avatar"
          className={classes.images__avatar}
        />
      </div>
    </div>
  );
};
