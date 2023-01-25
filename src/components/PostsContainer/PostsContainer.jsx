import classNames from 'classnames';

import classes from './PostsContainer.module.scss';

export const PostsContainer = ({ 
  children, 
  className, 
  dataLoading = false}
) => {
  return (
    <div className={classNames(
      `${classes.posts} ${className}`,
      {[classes.posts_loading]: dataLoading}
    )}>
      {children}
    </div>
  );
};
