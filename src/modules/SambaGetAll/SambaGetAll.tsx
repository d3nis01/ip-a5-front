import { useEffect, useState } from 'react';
import { SGAContainer, SGAInnerContainer, SGAList, SGAListItem, SGAListItemText, SGATitle } from './styles';
import { getAllSambaAccount } from '../../services/sambaService';
import { ISamba } from '../../types/IServiceTypesObjects';

const SambaGetAll = (): JSX.Element => {
  const [sambaArray, setSambaArray] = useState<ISamba[]>();

  useEffect(() => {
    const fetchList = async () => {
      const getAllArray = (await getAllSambaAccount()).data;
      setSambaArray(getAllArray);
    };
    fetchList();
  }, []);

  return (
    <SGAContainer>
      <SGAInnerContainer>
        <SGATitle>GET All Samba</SGATitle>
        <SGAList>
          {sambaArray &&
            sambaArray.map(item => (
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

export default SambaGetAll;
