import { useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MenuItemProps, MenuListAction } from './menu-list.structure';

const getActiveItemPath = (
  pathname: string,
  items: MenuItemProps[],
): string | undefined => {
  return items
    .filter((item) => pathname.startsWith(item.path))
    .sort((a, b) => b.path.length - a.path.length)[0]?.path;
};

const menuReducer = (
  state: MenuItemProps[],
  action: MenuListAction,
): MenuItemProps[] => {
  switch (action.type) {
    case 'SET_ACTIVE': {
      const activeItemPath = getActiveItemPath(action.payload, state);
      return state.map((item) => ({
        ...item,
        active: item.path === activeItemPath,
      }));
    }
    default:
      return state;
  }
};

const useMenu = (items: MenuItemProps[]) => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState = items.map((item) => ({
    ...item,
    active: item.path === getActiveItemPath(location.pathname, items),
  }));

  const [menuItems, dispatch] = useReducer(menuReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE', payload: location.pathname });
  }, [location.pathname]);

  const handleItemClick = (path: string) => {
    dispatch({ type: 'SET_ACTIVE', payload: path });
    navigate(path);
  };

  return { menuItems, handleItemClick };
};

export default useMenu;
