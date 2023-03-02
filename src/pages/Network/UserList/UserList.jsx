import { useUserSelector } from 'store/selectors';

import classes from './UserList.module.scss';
import { UserCard } from '../UserCard/UserCard';

export const UserList = () => {
  const { users } = useUserSelector();
  
  return (
    <ul className={classes.userList}>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};
