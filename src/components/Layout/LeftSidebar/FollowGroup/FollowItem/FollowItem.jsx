import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./FollowItem.module.scss";
import { LinkAvatar } from "components";

export const FollowItem = ({ follow }) => {
  return (
    <NavLink to={`/profile/${follow.id}`} className={classes.follow}>
      <LinkAvatar src={follow.avatar} />
    </NavLink>
  );
};
