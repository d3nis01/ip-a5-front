import { MenuItemProps } from './constants';
import { MenuItemContainer } from './styles';

const MenuItem = ({ title, active, Icon, onClick }: MenuItemProps): JSX.Element => {
  return (
    <MenuItemContainer $active={active} onClick={onClick}>
      <Icon $active={active} />
      <div>{title}</div>
    </MenuItemContainer>
  );
};

export default MenuItem;
