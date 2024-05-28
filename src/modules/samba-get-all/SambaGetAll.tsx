import { useEffect, useState } from 'react';
import {
  GlobalStyles,
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
import { getAllSambaAccount, updateSambaAccount, deleteSambaAccount } from '../../services/samba-service';
import { ISamba } from '../../types/IServiceTypesObjects';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { isIPv4, isMatricol } from '../../utils/inputValidators';

const SambaGetAll = (): JSX.Element => {
  const [sambaArray, setSambaArray] = useState<ISamba[]>();

  const Popup = withReactContent(Swal);

  useEffect(() => {
    const fetchList = async () => {
      const getAllArray = (await getAllSambaAccount()).data;
      setSambaArray(getAllArray);
    };
    fetchList();
  }, []);

  const handleDeleteClick = (id: string) => {
    Popup.fire({
      title: '<strong>Are you sure you want to delete this?</strong>',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      focusConfirm: false,
      customClass: {
        popup: 'swal2-popup-delete',
        title: 'swal-title-delete',
        confirmButton: 'swal-confirm-button-delete',
        cancelButton: 'swal-cancel-button-delete',
      },
    }).then(result => {
      if (result.isConfirmed) {
        deleteSambaAccount(id);
        setSambaArray(prevArray => prevArray?.filter(item => item.id !== id));
      }
    });
  };

  const handleEditClick = (object: ISamba) => {
    Popup.fire({
      title: '<strong>Edit</strong>',
      html: `
      <div style="text-align: left;">
        <label for="swal-input2" style="display: block; font-weight: bold;">New IP Address</label>
        <input id="swal-input2" class="swal2-input" value="${object.iPv4Address}" placeholder="192.168.1.1" />
        <label for="swal-input3" style="display: block; font-weight: bold;">New Description</label>
        <input id="swal-input3" class="swal2-input" value="${object.description}" placeholder="Brief description here" />
      </div>
    `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      focusConfirm: false,
      preConfirm: () => {
        const newIp = (document.getElementById('swal-input2') as HTMLInputElement).value;
        const newDesc = (document.getElementById('swal-input3') as HTMLInputElement).value;

        if (!isIPv4(newIp)) {
          Swal.showValidationMessage('Invalid IP address');
          return false;
        }

        if (newDesc.length <= 0) {
          Swal.showValidationMessage('Invalid description format');
          return false;
        }

        return { newIp, newDesc };
      },
      customClass: {
        popup: 'swal-popup-custom',
        title: 'swal-title-custom',
        confirmButton: 'swal-confirm-button-custom',
        cancelButton: 'swal-cancel-button-custom',
      },
    }).then(result => {
      if (result.isConfirmed && result.value) {
        updateSambaAccount(object.id, { newIpAddress: result.value.newIp, newDescription: result.value.newDesc }).then(() => {
          setSambaArray(prevArray => prevArray?.map(item => (item.id === object.id ? { ...item, iPv4Address: result.value.newIp, description: result.value.newDesc } : item)));
        });
      }
    });
  };

  return (
    <>
      <GlobalStyles />
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
                    <SGAListItemOptionsEdit onClick={() => handleEditClick(item)}>Edit</SGAListItemOptionsEdit>
                    <SGAListItemOptionsDelete onClick={() => handleDeleteClick(item.id)}>Delete</SGAListItemOptionsDelete>
                  </SGAListItemOptions>
                </SGAListItem>
              ))}
          </SGAList>
        </SGAInnerContainer>
      </SGAContainer>
    </>
  );
};

export default SambaGetAll;
