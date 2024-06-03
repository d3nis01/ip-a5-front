import { HomeContainer, HomeInnerContainer } from './styles';
import { useEffect } from 'react';
import { fetchUserDetails } from '../../services/auth-service';
import { useAppDispatch } from '../../hooks/store-hooks';
import { setUserDetailsAction } from '../../store/actions/auth-actions';
const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const v = async () => {
      const ja = await fetchUserDetails();
      dispatch(setUserDetailsAction(ja));
      console.log(ja);
    };
    v();
  }, []);

  return (
    <HomeContainer>
      <HomeInnerContainer>home</HomeInnerContainer>
    </HomeContainer>
  );
};

export default Home;
