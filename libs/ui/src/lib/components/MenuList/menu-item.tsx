import { MenuItemProps } from './menu-list.structure';
import { ItemWrapper, MenuIcon, MenuItemText } from './menu-list.styles';

const MenuItem = ({ icon, title, active, onClick }: MenuItemProps) => {
  return (
    <ItemWrapper active={!!active} onClick={onClick}>
      <MenuIcon active={!!active}>{icon}</MenuIcon>

      <MenuItemText active={!!active}>{title}</MenuItemText>
    </ItemWrapper>
  );
};

export default MenuItem;
