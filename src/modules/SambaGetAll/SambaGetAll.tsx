import { useEffect, useState } from 'react';
import {
  SGAContainer,
  SGAHeader,
  SGAHeaderColumnTitle,
  SGAInnerContainer,
  SGAList,
  SGAListItem,
  SGAListItemDescription,
  SGAListItemIP,
  SGAListItemOptions,
  SGAListItemOptionsDelete,
  SGAListItemOptionsEdit,
  SGAListItemUUID,
} from './styles';
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
        <SGAHeader>
          <SGAHeaderColumnTitle>
            <h4>UUID</h4>
          </SGAHeaderColumnTitle>
          <SGAHeaderColumnTitle>
            <h4>IPv4 Address</h4>
          </SGAHeaderColumnTitle>
          <SGAHeaderColumnTitle>
            <h4>Description</h4>
          </SGAHeaderColumnTitle>
          <SGAHeaderColumnTitle>
            <h4>Options</h4>
          </SGAHeaderColumnTitle>
        </SGAHeader>
        <SGAList>
          {sambaArray &&
            sambaArray.map(item => (
              <SGAListItem key={item.id}>
                <SGAListItemUUID>{item.id}</SGAListItemUUID>
                <SGAListItemIP>{item.iPv4Address}</SGAListItemIP>
                <SGAListItemDescription>{item.description}</SGAListItemDescription>
                <SGAListItemOptions>
                  <SGAListItemOptionsEdit>Edit</SGAListItemOptionsEdit>
                  <SGAListItemOptionsDelete>Delete</SGAListItemOptionsDelete>
                </SGAListItemOptions>
              </SGAListItem>
            ))}
        </SGAList>
      </SGAInnerContainer>
    </SGAContainer>
  );
};

export default SambaGetAll;
