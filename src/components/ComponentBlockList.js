import React from 'react';
import './ComponentBlockList.css';


function ComponentBlockList(props) {
  return (
    <div>
      <ul>
        <li><p onClick={props.openModal}>Colors</p></li>
        <li><p>Cases</p></li>
        <li><p>Knobs</p></li>
        <li><p>Footswitches</p></li>
        <li><p>Indicators</p></li>

      </ul>
    </div>
  )
}

  export default ComponentBlockList;
