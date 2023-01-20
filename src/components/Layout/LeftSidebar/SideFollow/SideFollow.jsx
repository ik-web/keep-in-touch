import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./SideFollow.module.scss";
import { fetchFollow } from "store/reducers/followReducer/followActionCreators";
import { useFollowSelector } from "store/selectors";
import { AvatarLink } from "components";

export const SideFollow = () => {
  const dispatch = useDispatch();
  const { follow } = useFollowSelector();
  const sideFollow = follow.slice(0, 3);

  useEffect(() => {
    dispatch(fetchFollow());
  }, []);

  if (!follow.length) {
    return null;
  }

  return (
    <div className={classes.sideFollow}>
      <h4 className={classes.sideFollow__title}>Following:</h4>

      <ul className={classes.sideFollow__list}>
        {sideFollow.map((followItem) => (
          <li key={followItem.id}>
            <NavLink to={`/profile/${followItem.id}`}>
              <AvatarLink src={followItem.avatar} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
