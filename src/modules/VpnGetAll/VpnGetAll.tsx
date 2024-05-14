import { useEffect, useState } from 'react';
import {
  GlobalStyles,
  VGAContainer,
  VGAHeader,
  VGAHeaderColumnTitle,
  VGAInnerContainer,
  VGAList,
  VGAListItem,
  VGAListItemDescription,
  VGAListItemIP,
  VGAListItemOptions,
  VGAListItemOptionsDelete,
  VGAListItemOptionsEdit,
  VGAListItemUUID,
} from './styles';
import { IVpn } from '../../types/IServiceTypesObjects';
import { deleteVpnAccount, getAllVpnAccount, updateVpnAccount } from '../../services/vpnService';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { isIPv4, isMatricol } from '../../utils/forms/inputValidators';

const VpnGetAll = (): JSX.Element => {
  const [VpnArray, setVpnArray] = useState<IVpn[]>();

  const Popup = withReactContent(Swal);

  useEffect(() => {
    const fetchList = async () => {
      const getAllArray = (await getAllVpnAccount()).data;
      setVpnArray(getAllArray);
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
        deleteVpnAccount(id);
        setVpnArray(prevArray => prevArray?.filter(item => item.id !== id));
      }
    });
  };

  const handleEditClick = (object: IVpn) => {
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
        updateVpnAccount(object.id, { newIpAddress: result.value.newIp, newDescription: result.value.newDesc }).then(() => {
          setVpnArray(prevArray => prevArray?.map(item => (item.id === object.id ? { ...item, iPv4Address: result.value.newIp, description: result.value.newDesc } : item)));
        });
      }
    });
  };

  return (
    <>
      <GlobalStyles />
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
                    <VGAListItemOptionsEdit onClick={() => handleEditClick(item)}>Edit</VGAListItemOptionsEdit>
                    <VGAListItemOptionsDelete onClick={() => handleDeleteClick(item.id)}>Delete</VGAListItemOptionsDelete>
                  </VGAListItemOptions>
                </VGAListItem>
              ))}
          </VGAList>
        </VGAInnerContainer>
      </VGAContainer>
    </>
  );
};

export default VpnGetAll;
