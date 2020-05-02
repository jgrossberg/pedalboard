import React, {useState} from 'react';
import './PedalBuilder.css';
import Pedal from '../components/Pedal';



function ComponentList(props) {
  return (
    <ul>
          <li><p onClick={props.openModal}>Colors</p></li>
          <li><p>Cases</p></li>
          <li><p>Knobs</p></li>
          <li><p>Footswitches</p></li>
          <li><p>Indicators</p></li>

    </ul>
  )
}

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
      <div className="components">
        <ComponentList openModal={() => setShowModal(true)}/>
      </div>
      <div className="workspace">
        <Pedal/>
      </div>
    </div>
  );
}

export default PedalBuilder;
