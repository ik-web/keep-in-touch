import { Field, Form } from "react-final-form";

import classes from "./AuthForm.module.scss";
import { CustomButton, CustomInput } from "components/UI";
import { useDispatch } from "react-redux";
import { fetchAuth } from "storeBeta/reducers/authReducer/actionCreators";
import { useAuthSelector } from "storeBeta/selectors";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const { error: fetchError } = useAuthSelector();

  const onSubmit = (authForm) => {
    dispatch(fetchAuth(authForm));
  };

  const validate = (value) => (value ? undefined : true);

  const getPlaceholderText = (isEmptyField, fetchError, defaultPlaceholder) => {
    if (isEmptyField) {
      return `Enter your ${defaultPlaceholder}`;
    }

    if (fetchError) {
      return "Incorrect data";
    }

    const placeholder =
      defaultPlaceholder.charAt(0).toUpperCase() + defaultPlaceholder.slice(1);

    return placeholder;
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form className={classes.AuthForm} onSubmit={handleSubmit}>
          <div className={classes.AuthForm__top}>
            <Field name="login" validate={validate}>
              {({ input, meta }) => {
                const isEmptyField = meta.touched && meta.error;

                return (
                  <CustomInput
                    {...input}
                    type="text"
                    placeholder={getPlaceholderText(
                      isEmptyField,
                      fetchError,
                      "login"
                    )}
                    isError={isEmptyField || fetchError}
                  />
                );
              }}
            </Field>

            <Field name="password" validate={validate}>
              {({ input, meta }) => {
                const isEmptyField = meta.touched && meta.error;

                return (
                  <CustomInput
                    type="text"
                    {...input}
                    placeholder={getPlaceholderText(
                      isEmptyField,
                      fetchError,
                      "password"
                    )}
                    isError={isEmptyField || fetchError}
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

            <CustomButton
              className={classes.AuthForm__button}
              type="submit"
              disabled={submitting}
            >
              LogIn
            </CustomButton>
          </div>
        </form>
      )}
    />
  );
};
