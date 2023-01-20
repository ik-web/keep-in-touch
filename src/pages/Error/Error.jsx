import { useRouteError } from "react-router-dom";

import classes from "./Error.module.scss";
import { getErrorMessage } from "./utils";

export const Error = () => {
  const error = useRouteError();

  return (
    <div className={classes.error}>
      <div className={classes.error__message}>
        <h1 className={classes.error__title}>
          {error.status}
        </h1>

        <p className={classes.error__subtitle}>
          {getErrorMessage(error)}
        </p>
      </div>
    </div>
  );
};
