import classes from "./AuthHint.module.scss";

export const AuthHint = () => {
  return (
    <div className={classes.authHint}>
      <p>
        Enter from <b>1</b> to <b>50</b> to field <b>"login"</b>
      </p>

      <p>
        Enter <b>"111"</b> to field <b>"password"</b>
      </p>
    </div>
  );
};
