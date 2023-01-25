import { useRef } from "react";
import classNames from "classnames";

import classes from "./CustomMenu.module.scss";
import { CustomButton } from "..";

export const CustomMenu = ({
  items = [],
  onClick,
  onClose,
  open = false,
  menuButtonName,

  menuButtonStyles,
  menuOverlayStyles,
  listStyles,
  menuStyles,
  itemStyles,
  itemButtonStyles,
  itemIconStyles,
  itemNameStyles,
}) => {
  const overlay = useRef();

  const hundleClose = (e) => {
    if (e.target === overlay.current) {
      onClose(false);
    }
  };

  return (
    <div className={`${classes.menu} ${menuStyles}`}>
      <CustomButton
        className={`${classes.menu__button} ${menuButtonStyles}`}
        onClick={onClick}
      >
        {menuButtonName}
      </CustomButton>

      <div
        id="ov"
        ref={overlay}
        onClick={hundleClose}
        className={classNames(`${classes.menu__overlay} ${menuOverlayStyles}`, {
          [classes.menu_isOpen]: open,
        })}
      >
        <MenuList
          items={items}
          listStyles={listStyles}
          itemStyles={itemStyles}
          itemIconStyles={itemIconStyles}
          itemNameStyles={itemNameStyles}
          itemButtonStyles={itemButtonStyles}
        />
      </div>
    </div>
  );
};

const MenuList = ({
  items,
  listStyles,
  itemStyles,
  itemIconStyles,
  itemNameStyles,
  itemButtonStyles,
}) => {
  return (
    <ul className={`${classes.menu__list} ${listStyles}`}>
      {items.map((item) => (
        <li key={item.id} className={`${classes.menu__item} ${itemStyles}`}>
          <MenuListItem
            item={item}
            IconStyles={itemIconStyles}
            ItemNameStyles={itemNameStyles}
            itemButtonStyles={itemButtonStyles}
          />
        </li>
      ))}
    </ul>
  );
};

const MenuListItem = ({
  item,
  itemButtonStyles,
  itemIconStyles,
  itemNameStyles,
}) => {
  return (
    <CustomButton
      onClick={item.handleClick}
      className={`${classes.menu__itemButton} ${itemButtonStyles}`}
    >
      <span className={`${classes.menu__itemIcon} ${itemIconStyles}`}>
        {item.icon}
      </span>

      <span className={`${classes.menu__itemName} ${itemNameStyles}`}>
        {item.name}
      </span>
    </CustomButton>
  );
};
