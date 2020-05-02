import React, {useState} from 'react';
import './PedalBuilder.css';
import Pedal from '../components/Pedal';
import ComponentBlockList from '../components/ComponentBlockList';




function Modal(props) {
  return (
    <div className='modal'>
          <button tabIndex='0' onClick={props.closeModal}>Close Modal</button>
    </div>
  )
}

function PedalBuilder() {
  const [showModal, setShowModal] = useState(false);
  

  return (
    <div className="container">
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} />
      )}

      <ComponentBlockList openModal={() => setShowModal(true)}/>
      <div className="workspace">
        <Pedal/>
      </div>
    </div>
  );
}

export default PedalBuilder;
