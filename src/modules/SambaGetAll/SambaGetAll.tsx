import { useEffect, useState } from 'react';
import { SGAContainer, SGAInnerContainer, SGAList, SGAListItem, SGAListItemText, SGATitle,  GlobalStyles } from './styles';
import { getAllSambaAccount } from '../../services/sambaService';
import { ISamba } from '../../types/IServiceTypesObjects';
import Swal, { SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
        cancelButton: 'swal-cancel-button-delete'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Item deleted");
      }
    });
  };

  const handleEditClick = () => {
    Popup.fire({
      title: '<strong>Edit</strong>',
      html: (
        <div style={{ textAlign: 'left' }}>
          <label htmlFor="swal-input1" style={{ display: 'block', fontWeight: 'bold' }}>UUID</label>
          <input id="swal-input1" className="swal2-input" placeholder="00000000-0000-0000-0000-000000000000" />
    
          <label htmlFor="swal-input2" style={{ display: 'block', fontWeight: 'bold' }}>New IP Address</label>
          <input id="swal-input2" className="swal2-input" placeholder="192.168.1.1" />
    
          <label htmlFor="swal-input3" style={{ display: 'block', fontWeight: 'bold' }}>New Description</label>
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
        cancelButton: 'swal-cancel-button-custom'
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        console.log(result.value);
      }
    });
  };

  return (
    <>
    <GlobalStyles /> 
    <SGAContainer>
      <SGAInnerContainer>
        <SGATitle>GET All Samba</SGATitle>
        <button style={{ backgroundColor: '#3388cc', color: 'white', padding: '10px', fontSize: '16px', margin: '10px', marginLeft: '700px', marginRight: '50px' }} onClick={handleEditClick}>
          Edit
        </button>
        <button style={{ backgroundColor: 'red', color: 'white', padding: '10px', fontSize: '16px', margin: '10px', marginLeft: '700px', marginRight: '50px' }} onClick={() => handleDeleteClick()}>
          Delete
        </button>
        <SGAList>
          {sambaArray && sambaArray.map((samba, index) => (
            <SGAListItem key={index}>
              <SGAListItemText>
                <b>UUID: </b>
                {samba.id}
              </SGAListItemText>
              <SGAListItemText>
                <b>Description: </b>
                {samba.description}
              </SGAListItemText>
              <SGAListItemText>
                <b>IPv4 Address: </b>
                {samba.iPv4Address}
              </SGAListItemText>
              <button style={{ backgroundColor: 'blue', color: 'black', borderRadius: '50%' }} onClick={() => handleEditClick()}>
                Edit
              </button>
              <button style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', marginLeft: '10px' }} onClick={handleDeleteClick}>
                Delete
              </button>
            </SGAListItem>
          ))}
        </SGAList>
      </SGAInnerContainer>
    </SGAContainer>
    </>
  );
};

export default SambaGetAll;
