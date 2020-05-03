import React from 'react';
import './ComponentModal.css';


function ComponentModal(props) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        {props.openComponent}<br/>
        <button tabIndex='0' onClick={props.closeModal}>Close Modal</button>
      </div>
    </div>
  )
}

  export default ComponentModal;
