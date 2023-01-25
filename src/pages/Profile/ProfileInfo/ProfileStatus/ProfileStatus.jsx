import { useState } from "react";
import { useDispatch } from "react-redux";

import { putProfileStatus } from "store/reducers";
import { useProfileSelector } from "store/selectors";

import { ProfileStatusForm } from "./ProfileStatusForm/ProfileStatusForm";
import { ProfileStatusValue } from "./ProfileStatusValue/ProfileStatusValue";

export const ProfileStatus = () => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const {
    profile,
    isUserProfile,
    statusSending
  } = useProfileSelector();

  const activateEditMode = () => {
    if (!statusSending) {
      isUserProfile && setEditMode(true);
    }
  };

  const deactivateEditMode = (status) => {
    if (status !== profile.status) {
      dispatch(putProfileStatus(status));
    }

    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <ProfileStatusForm deactivateEditMode={deactivateEditMode} />
      ) : (
        <ProfileStatusValue activateEditMode={activateEditMode} />
      )}
    </div>
  );
};
