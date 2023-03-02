import classes from './PaginationButton.module.scss';
import { CustomButton } from 'components/UI';

export const PaginationButton = ({
  page,
  setCurrentPage,
  currentPage,
  disabled
}) => {

  const hundleClick = () => {
    setCurrentPage(page);
  }

  return (
    <CustomButton
      name={page}
      className={
        page === currentPage
          ? `${classes.button} ${classes.button_isActive}`
          : classes.button
      }
      onClick={hundleClick}
      disabled={disabled}
    />
  );
};
