import classes from'./Loader.module.scss';
import { AppImg } from 'components/UI';

export const Loader = (props) => {
  return (
    <div className={`${classes.loader} ${props.className}`}>
      <AppImg id={'spinner'} />
    </div>
  );
};
