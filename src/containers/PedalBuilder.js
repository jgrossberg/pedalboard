import React, {useState} from 'react';
import './PedalBuilder.css';
import Pedal from '../components/Pedal';
import ComponentModal from '../components/ComponentModal';

import ComponentBlockList from '../components/ComponentBlockList';



const COMPONENTS = [
  'Colors',
  'Cases',
  'Knobs',
  'Footswitches',
  'Indicators'
]

function PedalBuilder() {
  const [showModal, setShowModal] = useState(false);
  const [openComponent, setOpenComponent] = useState();
  
  const handleComponentSelect = (event) => {
    setOpenComponent(event.target.innerHTML)
    setShowModal(true)
  }

  return (
    <div className="container">
      {showModal && (
        <ComponentModal
          closeModal={() => setShowModal(false)}
          openComponent={openComponent}
        />
      )}

      <ComponentBlockList 
        componentSelect={handleComponentSelect}
        components={COMPONENTS}
      />
      
      <div className="workspace">
        <Pedal/>
      </div>
    </div>
  );
}

export default PedalBuilder;
