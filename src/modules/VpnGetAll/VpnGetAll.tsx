import { useEffect, useState } from 'react';
import { SGAContainer, SGAInnerContainer, SGAList, SGAListItem, SGAListItemText, SGATitle } from './styles';
import { IVpn } from '../../types/IServiceTypesObjects';
import { getAllVpnAccount } from '../../services/vpnService';

const VpnGetAll = (): JSX.Element => {
  const [VpnArray, setVpnArray] = useState<IVpn[]>();

  useEffect(() => {
    const fetchList = async () => {
      const getAllArray = (await getAllVpnAccount()).data;
      setVpnArray(getAllArray);
    };
    fetchList();
  }, []);

  return (
    <SGAContainer>
      <SGAInnerContainer>
        <SGATitle>GET All Vpn</SGATitle>
        <SGAList>
          {VpnArray &&
            VpnArray.map(item => (
              <SGAListItem>
                <SGAListItemText>
                  <b>UUID: </b>
                  {item.id}
                </SGAListItemText>
                <SGAListItemText>
                  <b>Description: </b>
                  {item.description}
                </SGAListItemText>
                <SGAListItemText>
                  <b>iPv4Adress: </b>
                  {item.iPv4Address}
                </SGAListItemText>
              </SGAListItem>
            ))}
        </SGAList>
      </SGAInnerContainer>
    </SGAContainer>
  );
};

export default VpnGetAll;
