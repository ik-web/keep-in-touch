import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import classes from "./SideNavLink.module.scss";
import { CustomIcon } from "components/UI";

export const SideNavLink = ({ link, onSetNoContactSelected }) => {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        classNames(classes.link, { [classes.link_active]: isActive })
      }
      onClick={onSetNoContactSelected}
    >
      <CustomIcon id={link.id} />
      {link.name}
    </NavLink>
  );
};
