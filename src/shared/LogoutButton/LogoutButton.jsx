import classes from "./LogoutButton.module.scss";
import { CustomIcon } from "components/UI";

export const LogoutButton = () => {
  const handleClick = () => {
    console.log("User logout");
  };

  return (
    <button className={classes.logoutBtn} onClick={handleClick}>
      <span>Logout</span>
      <CustomIcon id="logout-icon" />
    </button>
  );
};
