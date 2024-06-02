import { MenuItemProps, MenuListAction } from './menu-list.structure';

export const menuReducer = (
  state: MenuItemProps[],
  action: MenuListAction
): MenuItemProps[] => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return state.map((item) => ({
        ...item,
        active: item.path === action.payload,
      }));
    default:
      return state;
  }
};
