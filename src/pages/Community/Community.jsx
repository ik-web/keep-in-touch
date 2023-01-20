import classes from "./Community.module.scss";
import { CustomImg } from "components/UI";
import { Layout } from "components";

export const Community = () => {
  return (
    <Layout>
      <div className={classes.community}>
        <h1 className={classes.community__title}>Community page</h1>

        <div className={classes.community__imgContainer}>
          <CustomImg id="note" />
        </div>
      </div>
    </Layout>
  );
};
