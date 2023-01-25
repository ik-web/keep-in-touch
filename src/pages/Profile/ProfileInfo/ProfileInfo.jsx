import { useProfileSelector } from "store/selectors";

import classes from "./ProfileInfo.module.scss";
import { CustomTitle } from "components/UI";
import { OnlineStatus } from "components";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

export const ProfileInfo = () => {
  const { profile } = useProfileSelector();

  return (
    <div className={classes.profile}>
      <div className={classes.profile__info}>
        <CustomTitle tag="h1">
          {profile.name}
        </CustomTitle>

        <ProfileStatus />
        <OnlineStatus />

        <div className={classes.profile__city}>
          <h4>Lives in:</h4>
          <span>{profile.city}</span>
        </div>

        <div className={classes.profile__about}>
          <h4 className={classes.profile__aboutTitle}>
            About me:
          </h4>

          <p className={classes.profile__aboutDescribe}>
            {profile.about}
          </p>
        </div>
      </div>
    </div>
  );
};
