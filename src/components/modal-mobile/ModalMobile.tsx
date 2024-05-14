import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/store-hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { isModalOpenAppStateSelector } from '../../store/selectors/app-selectors';
import { setAppIsModalOpenAction } from '../../store/actions/app-actions';
import { FirstModalLine, MMOptionWrapper, MMOptionsContainer, ModalHeaderContainer, ModalOptionsWrapper, OpenModalContainer, SecondModalLine, ThirdModalLine } from './styles';
import { AnimatePresence } from 'framer-motion';
import { IMenuOption, MENU_OPTIONS } from '../sidebar/constants';
import { useEffect } from 'react';

const MMOptions = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleNavigate = (route: string) => {};

  return (
    <MMOptionsContainer>
      {MENU_OPTIONS.map((option: IMenuOption) => (
        <MMOptionWrapper onClick={() => navigate(option.route)} isSelected={option.route == location.pathname}>
          {option.title}
        </MMOptionWrapper>
      ))}
    </MMOptionsContainer>
  );
};

const ModalMobile = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isModalOpen = useSelector(isModalOpenAppStateSelector);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(setAppIsModalOpenAction(false));
  }, [location.pathname]);

  return (
    <>
      <ModalHeaderContainer onClick={() => dispatch(setAppIsModalOpenAction(!isModalOpen))}>
        <FirstModalLine animate={isModalOpen ? 'modalOpen' : 'modalNotOpen'} />
        <SecondModalLine animate={isModalOpen ? 'modalOpen' : 'modalNotOpen'} />
        <ThirdModalLine animate={isModalOpen ? 'modalOpen' : 'modalNotOpen'} />
      </ModalHeaderContainer>
      <AnimatePresence>
        {isModalOpen && (
          <OpenModalContainer initial="modalNotOpen" animate="modalOpen" exit="exit">
            <ModalOptionsWrapper>
              <MMOptions />
            </ModalOptionsWrapper>
          </OpenModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalMobile;
