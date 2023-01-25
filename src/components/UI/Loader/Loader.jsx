import classes from'./Loader.module.scss';
import { CustomImg } from 'components/UI';

export const Loader = (props) => {
  return (
    <div className={`${classes.loader} ${props.className}`}>
      <CustomImg id={'spinner'} />
    </div>
  );
};
