import classes from "./FollowGroup.module.scss";
import { FollowItem } from "./FollowGroup";

export const FollowGroup = () => {
  const followings = false;

  return (
    <div className={classes.followGroup}>
      <h4 className={classes.followGroup__title}>
        Following:
      </h4>

      <div className={classes.followGroup__buttons}>
        {followings.map((following) => (
          <FollowItem following={following} key={following.id} />
        ))}
      </div>
    </div>
  );
};
