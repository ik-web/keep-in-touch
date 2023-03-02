import classNames from "classnames";
import classes from "./OnlineStatus.module.scss";

export const OnlineStatus = ({ onlineStatus }) => {
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
