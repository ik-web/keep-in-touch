import classNames from "classnames";

import { useProfileSelector } from "store/selectors";

import classes from "./ProfileStatusValue.module.scss";

export const ProfileStatusValue = ({ activateEditMode }) => {
  const { profile, isUserProfile } = useProfileSelector();

  return (
    <>
      {!isUserProfile && !profile.status 
        ? <div></div>
        : <div className={classNames(classes.statusValue, {
            [classes.authUserStatusValue]: isUserProfile,
          })}
          onClick={activateEditMode}
        >
          {profile.status.trim() || "Click here to set status"}
        </div>
      }
    </>
  );
};
