import { useDispatch } from "react-redux";
import { Field, Form } from "react-final-form";

import { postNewPost } from "store/reducers";
import { useAuthSelector, useProfilePostsSelector } from "store/selectors";

import classes from "./NewPostForm.module.scss";
import { CustomButton } from "components/UI";
import { createNewPost } from "./utils";

export const NewPostForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuthSelector();
  const { newPostSending } = useProfilePostsSelector();

  const handleSubmit = (e) => {
    if (e.newPostText.trim()) {
      dispatch(postNewPost(createNewPost(user, e.newPostText)));
      e.newPostText = "";
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form className={classes.newPostForm} onSubmit={handleSubmit}>
          <Field
            className={classes.newPostForm__textarea}
            name="newPostText"
            component="textarea"
            placeholder="Write a new post..."
          />
          <CustomButton
            type="submit"
            className={classes.newPostForm__button}
            disabled={newPostSending}
          >
            Add post
          </CustomButton>
        </form>
      )}
    />
  );
};
