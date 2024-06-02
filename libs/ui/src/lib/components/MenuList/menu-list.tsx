import { useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MenuItem from './menu-item';
import { menuReducer } from './menu-list-reducer';
import { MenuListProps } from './menu-list.structure';
import { MenuListWrapper } from './menu-list.styles';

const MenuList = ({ items }: MenuListProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState = items.map((item) => ({
    ...item,
    active: item.path === location.pathname,
  }));

  const [menuItems, dispatch] = useReducer(menuReducer, initialState);

  const handleItemClick = (path: string) => {
    dispatch({ type: 'SET_ACTIVE', payload: path });
    navigate(path);
  };

  return (
    <MenuListWrapper>
      {menuItems.map((item) => (
        <MenuItem
          key={item.path}
          {...item}
          onClick={() => handleItemClick(item.path)}
        />
      ))}
    </MenuListWrapper>
  );
};

export default MenuList;
