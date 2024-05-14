import { useEffect } from 'react';
import { useAppDispatch } from './store-hooks';
import { setAppIsScrolledAction, setAppWidthAction, setIsMobileAction } from '../store/actions/app-actions';

const useEventListeners = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', () => dispatch(setAppWidthAction(window.innerWidth)));
    window.addEventListener('resize', () => dispatch(setIsMobileAction(window.innerWidth <= 992)));
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        dispatch(setAppIsScrolledAction(true));
      } else {
        dispatch(setAppIsScrolledAction(false));
      }
    });
  }, [dispatch]);
};
export default useEventListeners;
