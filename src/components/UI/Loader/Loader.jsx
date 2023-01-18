import classes from'./Loader.module.scss';
import { CustomImg } from 'components/UI';

export const Loader = (props) => {
  return (
    <div className={`${classes.loader} ${props.classes}`}>
      <CustomImg id={'spinner'} />
    </div>
  );
};
