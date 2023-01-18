import classNames from "classnames";

import classes from "./AuthHint.module.scss";

export const AuthHint = () => {
  return (
    <div className={classes.authHint}>
      <div
        className={classNames(classes.authHint__error, {
          [classes.authHint__error_isActive]: false,
        })}
      >
        <p>Incorrect login or password...</p>

        <p>Try again.</p>
      </div>

      <p>
        Enter from <b>1</b> to <b>50</b> to field <b>"login"</b>
      </p>

      <p>
        Enter <b>"111"</b> to field <b>"password"</b>
      </p>
    </div>
  );
};
