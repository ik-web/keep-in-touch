import classes from './CustomImg.module.scss'
import headerLogo from 'assets/img/logo.png';
import spinner from 'assets/img/spinner.svg';
import community from 'assets/img/community.png';

export const CustomImg = ({ id, ...props }) => {
  switch (id) {
    case 'header-logo':
      return (
        <img
          src={headerLogo}
          alt='Keep in touch app logo'
          className={classes.headerLogo}
        />
      );

    case 'spinner':
      return (
        <img
          src={spinner}
          alt='Spinner'
          className={`${classes.spinner} ${props.classes}`}
        />
      );

    case 'note':
      return (
        <img
          src={community}
          alt='Community'
          className={`${classes.community} ${props.classes}`}
        />
      );

    default:
      return null;
  };
};
