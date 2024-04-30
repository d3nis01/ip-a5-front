import { MenuItemContainer } from './styles';

type MenuItemProps = {
  title: string;
  extended: boolean;
  onClick: () => void;
  active: boolean;
};

const MenuItem = ({ title, extended, onClick, active }: MenuItemProps): JSX.Element => {
  return (
    <MenuItemContainer $active={active} $extended={extended} onClick={onClick}>
      <div>{title}</div>
    </MenuItemContainer>
  );
};

export default MenuItem;
