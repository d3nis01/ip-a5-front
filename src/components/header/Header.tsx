import { useAppSelector } from '../../hooks/store-hooks';
import { appWidthSelector } from '../../store/selectors/app-selectors';
import ModalMobile from '../modal-mobile';
import { HeaderContainer } from './styles';

export const Header = (): JSX.Element => {
  const width = useAppSelector(appWidthSelector);

  return <HeaderContainer>{width <= 992 && <ModalMobile />}</HeaderContainer>;
};
