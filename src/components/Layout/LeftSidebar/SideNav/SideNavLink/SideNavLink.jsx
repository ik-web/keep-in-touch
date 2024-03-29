import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import classes from "./SideNavLink.module.scss";
import { AppIcon } from "components/UI";

export const SideNavLink = ({ link }) => {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        classNames(classes.link, { [classes.link_active]: isActive })
      }
    >
      <span className={classes.link__icon}>
        <AppIcon id={link.id} />
      </span>

      <span>
        {link.name}
      </span>
    </NavLink>
  );
};
