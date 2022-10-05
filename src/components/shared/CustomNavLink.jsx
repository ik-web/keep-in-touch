import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import GetIcon from '../../img/GetIcon';


const CustomNavLink = ({ 
  style,
  to,
  name,
  ...props
}) => (
  <NavLink 
    to={to}
    className={({ isActive }) => classNames(
      style[0],
      { [style[1]]: isActive }
    )}
  >
    <GetIcon id={props.id} />{name}
  </NavLink>
);

export default CustomNavLink;
