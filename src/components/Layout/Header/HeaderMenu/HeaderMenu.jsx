import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthSelector } from "store/selectors";
import { logout } from "store/reducers";

import classes from "./HeaderMenu.module.scss";
import { CustomIcon, CustomMenu, SmallAvatar } from "components/UI";
import { useDispatch } from "react-redux";

export const HeaderMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuthSelector();
  const [open, setOpen] = useState(false);

  const handleOnProfileClick = () => {
    navigate(`/profile/${user.id}`);
    setOpen(false);
  };

  const handleOnLogoutClick = () => {
    dispatch(logout());
    setOpen(false);
  };

  const menuItems = [
    {
      id: 1,
      name: "Profile",
      icon: <CustomIcon id="profile-icon" />,
      handleClick: handleOnProfileClick,
    },
    {
      id: 2,
      icon: <CustomIcon id="logout-icon" />,
      name: "Logout",
      handleClick: handleOnLogoutClick,
    },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomMenu
      open={open}
      onClick={handleClick}
      onClose={handleClose}
      items={menuItems}
      menuButtonStyles={classes.headerMenu__menuButton}
      listStyles={classes.headerMenu__list}
      itemButtonStyles={classes.headerMenu__itemButton}
      menuButtonName={
        <SmallAvatar src={user.avatar} styles={classes.headerMenu__avatar} />
      }
    />
  );
};
