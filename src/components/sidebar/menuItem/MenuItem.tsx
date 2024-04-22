import { MenuItemContainer } from './styles';

type MenuItemProps = {
  title: string;
  onClick: () => void;
  active?: boolean;
};

const MenuItem = ({ title, onClick, active = false }: MenuItemProps): JSX.Element => {
  return (
    <MenuItemContainer $active={active} onClick={onClick}>
      <div>{title}</div>
    </MenuItemContainer>
  );
};

export default MenuItem;
