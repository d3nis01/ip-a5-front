import { HomeContainer, HomeInnerContainer } from './styles';
//import PostSamba from '../post-samba/PostSamba';
import PostVpn from '../post-vpn/PostVpn';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <HomeInnerContainer><PostVpn/></HomeInnerContainer>
    </HomeContainer>
  );
};

export default Home;