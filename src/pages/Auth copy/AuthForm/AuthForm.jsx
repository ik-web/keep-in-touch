import classNames from "classnames";
import { Field, Form } from "react-final-form";

import classes from "./AuthForm.module.scss";

export const AuthForm = () => {
  const onSubmit = (e) => {
    // fetchUserAuth(e);
  }

  const required = value => value ? undefined : true;

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form className={classes.AuthForm} onSubmit={handleSubmit}>
          <div className={classes.AuthForm__top}>
            <Field name="login" validate={required}>
              {({ input, meta }) => {
                const isInvalid = meta.touched && meta.error;

                return (
                  <input
                    type="text"
                    {...input}
                    placeholder={isInvalid ? "Enter your login" : "Login"}
                    className={classNames(classes.AuthForm__input, {
                      [classes.AuthForm__input_required]: isInvalid,
                    })}
                  />
                );
              }}
            </Field>

            <Field name="password" validate={required}>
              {({ input, meta }) => {
                const isInvalid = meta.touched && meta.error;

                return (
                  <input
                    type="text"
                    {...input}
                    placeholder={isInvalid ? "Enter your password" : "Password"}
                    className={classNames(classes.AuthForm__input, {
                      [classes.AuthForm__input_required]: isInvalid,
                    })}
                  />
                );
              }}
            </Field>
          </div>

          <div className={classes.AuthForm__bottom}>
            <label className={classes.AuthForm__checkboxLabel}>
              <Field
                type="checkbox"
                name="remember"
                component="input"
                className={classes.AuthForm__checkbox}
              />
              Remember me
            </label>

            <button
              className={classes.AuthForm__button}
              type="submit"
              disabled={submitting}
            >
              LogIn
            </button>
          </div>
        </form>
      )}
    />
  );
};
