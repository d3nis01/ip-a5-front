import { HomeContainer, HomeInnerContainer } from './styles';
import GetVpn from '../../modules/GetVpn/GetVpn';
import GetSamba from '../../modules/GetSamba/GetSamba';
import { useEffect } from 'react';
import { fetchUserDetails } from '../../api/auth/authService';
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
