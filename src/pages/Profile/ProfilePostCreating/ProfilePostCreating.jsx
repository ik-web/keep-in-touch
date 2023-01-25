import classes from "./ProfilePostCreating.module.scss";
import { CustomTitle } from "components/UI";
import { NewPostForm } from "./NewPostForm/NewPostForm";

export const ProfilePostCreating = () => {
  return (
    <div className={classes.newPost}>
      <CustomTitle tag="h3">
        Add a new post:
      </CustomTitle>

      <div className={classes.newPost__form}>
        <NewPostForm />
      </div>
    </div>
  );
};
