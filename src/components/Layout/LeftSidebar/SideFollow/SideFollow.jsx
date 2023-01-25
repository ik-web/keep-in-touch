import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFollowSelector } from "store/selectors";
import { fetchFollow } from "store/reducers/followReducer";

import classes from "./SideFollow.module.scss";
import { CustomTitle } from "components/UI";
import { LinkProfileAvatar } from "components";

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
      <CustomTitle tag="h4">Following:</CustomTitle>

      <ul className={classes.sideFollow__list}>
        {sideFollow.map((followItem) => (
          <li key={followItem.id}>
            <LinkProfileAvatar
              src={followItem.avatar}
              to={`/profile/${followItem.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
