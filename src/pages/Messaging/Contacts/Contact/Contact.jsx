import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import classes from "./Contact.module.scss";
import { SmallAvatar } from "components/UI";

export const Contact = ({ dialog, setIsContactSelected }) => {
  return (
    <NavLink
      to={`${dialog.id}`}
      onClick={setIsContactSelected}
      className={({ isActive }) =>
      classNames(classes.contact, { [classes.contact_active]: isActive })
    }
    > 
      <SmallAvatar src={dialog.contactAvatar} />
      {dialog.contact}
    </NavLink>
  );
};
