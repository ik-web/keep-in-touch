import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFollowSelector } from "store/selectors";
import { clearFollowItems, fetchFollowItems } from "store/reducers";

import classes from "./SideFollow.module.scss";
import { CustomTitle } from "components/UI";
import { LinkProfileAvatar } from "components";

export const SideFollow = () => {
  const dispatch = useDispatch();
  const { followItems } = useFollowSelector();
  const sideFollowItems = followItems.slice(0, 3);

  useEffect(() => {
    dispatch(fetchFollowItems());

    return () => {
      dispatch(clearFollowItems());
    }
  }, []);

  if (!followItems.length) {
    return null;
  }

  return (
    <div className={classes.sideFollow}>
      <CustomTitle tag="h4">Following:</CustomTitle>

      <ul className={classes.sideFollow__list}>
        {sideFollowItems.map((followItem) => (
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
