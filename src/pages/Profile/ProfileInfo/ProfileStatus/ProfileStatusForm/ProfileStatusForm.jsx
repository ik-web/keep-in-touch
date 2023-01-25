import { useState } from "react";

import { useProfileSelector } from "store/selectors";

import classes from "./ProfileStatusForm.module.scss";

export const ProfileStatusForm = ({ deactivateEditMode }) => {
  const { profile } = useProfileSelector();
  const [status, setStatus] = useState(profile.status);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return false;
  };

  const handleBlur = () => {
    deactivateEditMode(status);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={classes.statusInput}
        placeholder="Enter your status..."
        value={status}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus={true}
        maxLength={80}
      />
    </form>
  );
};
