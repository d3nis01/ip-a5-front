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
import { getAllVpnAccount } from '../../services/vpnService';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

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

  const handleDeleteClick = () => {
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
        console.log('Item deleted');
      }
    });
  };

  const handleEditClick = () => {
    Popup.fire({
      title: '<strong>Edit</strong>',
      html: (
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="swal-input1" style={{ display: 'block', fontWeight: 'bold' }}>
            UUID
          </label>
          <input id="swal-input1" className="swal2-input" placeholder="00000000-0000-0000-0000-000000000000" />

          <label htmlFor="swal-input2" style={{ display: 'block', fontWeight: 'bold' }}>
            New IP Address
          </label>
          <input id="swal-input2" className="swal2-input" placeholder="192.168.1.1" />

          <label htmlFor="swal-input3" style={{ display: 'block', fontWeight: 'bold' }}>
            New Description
          </label>
          <input id="swal-input3" className="swal2-input" placeholder="Brief description here" />
        </div>
      ),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      focusConfirm: false,
      preConfirm: () => {
        const uuid = (document.getElementById('swal-input1') as HTMLInputElement).value;
        const newIp = (document.getElementById('swal-input2') as HTMLInputElement).value;
        const newDesc = (document.getElementById('swal-input3') as HTMLInputElement).value;
        return { uuid, newIp, newDesc };
      },
      customClass: {
        popup: 'swal-popup-custom',
        title: 'swal-title-custom',
        confirmButton: 'swal-confirm-button-custom',
        cancelButton: 'swal-cancel-button-custom',
      },
    }).then(result => {
      if (result.isConfirmed && result.value) {
        console.log(result.value);
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
                    <VGAListItemOptionsEdit onClick={handleEditClick}>Edit</VGAListItemOptionsEdit>
                    <VGAListItemOptionsDelete onClick={handleDeleteClick}>Delete</VGAListItemOptionsDelete>
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
