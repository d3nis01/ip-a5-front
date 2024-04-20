import { HomeContainer, HomeInnerContainer } from './styles';
import DeleteVpn from '../../modules/DeleteVPN/DeleteVpn';

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <HomeInnerContainer>
        <DeleteVpn />
      </HomeInnerContainer>
    </HomeContainer>
  );
};

export default Home;
