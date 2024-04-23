export type MenuItemProps = {
  title: string;
  active: boolean;
  Icon: React.ComponentType<{ $active: boolean }>;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};
