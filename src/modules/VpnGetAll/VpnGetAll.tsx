import { useEffect, useState } from 'react';
import { VGAContainer, VGAHeader, VGAHeaderColumnTitle, VGAInnerContainer, VGAList, VGAListItem, VGAListItemDescription, VGAListItemIP, VGAListItemOptions, VGAListItemOptionsDelete, VGAListItemOptionsEdit, VGAListItemUUID } from './styles';
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
    <VGAContainer>
      <VGAInnerContainer>
      <VGAHeader>
          <VGAHeaderColumnTitle>
            <h4>UUID</h4>
          </VGAHeaderColumnTitle>
          <VGAHeaderColumnTitle>
            <h4>IPv4 Address</h4>
          </VGAHeaderColumnTitle>
          <VGAHeaderColumnTitle>
            <h4>Description</h4>
          </VGAHeaderColumnTitle>
          <VGAHeaderColumnTitle>
            <h4>Options</h4>
          </VGAHeaderColumnTitle>
        </VGAHeader>
        <VGAList>
          {VpnArray &&
            VpnArray.map(item => (
              <VGAListItem key={item.id}>
                <VGAListItemUUID>{item.id}</VGAListItemUUID>
                <VGAListItemIP>{item.iPv4Address}</VGAListItemIP>
                <VGAListItemDescription>{item.description}</VGAListItemDescription>
                <VGAListItemOptions>
                  <VGAListItemOptionsEdit>Edit</VGAListItemOptionsEdit>
                  <VGAListItemOptionsDelete>Delete</VGAListItemOptionsDelete>
                </VGAListItemOptions>
              </VGAListItem>
            ))}
        </VGAList>
      </VGAInnerContainer>
    </VGAContainer>
  );
};

export default VpnGetAll;
