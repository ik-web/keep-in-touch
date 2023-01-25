import classNames from "classnames";

import { useOnlineStatusSelector } from "store/selectors";

import classes from "./OnlineStatus.module.scss";

export const OnlineStatus = () => {
  const { onlineStatus } = useOnlineStatusSelector();

  return (
    <div className={classes.onlineStatus}>
      <span
        className={classNames(
          `${classes.onlineStatus__indicator} ${classes.onlineStatus__indicator_offline}`,
          {
            [classes.onlineStatus__indicator_online]: onlineStatus,
          }
        )}
      ></span>

      <em className={classes.onlineStatus__text}>
        {onlineStatus ? "Online" : "Offline"}
      </em>
    </div>
  );
};
