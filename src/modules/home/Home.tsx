import { HomeContainer, HomeInnerContainer } from './styles';
import DeleteVpn from '../../modules/DeleteVPN/DeleteVpn';
import DeleteSamba from '../../modules/DeleteSamba/DeleteSamba';
const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <HomeInnerContainer>
        <p>Home</p>
      </HomeInnerContainer>
    </HomeContainer>
  );
};

export default Home;
