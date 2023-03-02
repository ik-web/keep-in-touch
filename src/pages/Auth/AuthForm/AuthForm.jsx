import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";

import { useAuthSelector } from "store/selectors";
import { fetchAuth } from "store/reducers";

import classes from "./AuthForm.module.scss";
import { getPlaceholderText } from "./utils";
import { CustomButton, CustomInput } from "components/UI";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const { error: fetchError } = useAuthSelector();

  const onSubmit = (authForm) => {
    dispatch(fetchAuth(authForm));
  };

  const validate = (value) => (value ? undefined : true);

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

            <div>
              <CustomButton
                type="submit"
                disabled={submitting}
                className={classes.AuthForm__button}
                name='Login'
              />
            </div>
          </div>
        </form>
      )}
    />
  );
};
