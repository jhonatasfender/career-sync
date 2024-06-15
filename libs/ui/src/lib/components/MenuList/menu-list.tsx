import MenuItem from './menu-item';
import useMenu from './menu-list-reducer';
import { MenuListProps } from './menu-list.structure';
import { MenuListWrapper } from './menu-list.styles';

const MenuList = ({ items }: MenuListProps) => {
  const { menuItems, handleItemClick } = useMenu(items);

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
