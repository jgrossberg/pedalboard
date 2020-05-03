import React from 'react';
import './ComponentBlockList.css';



function ComponentBlockList(props) {
  const listItems = props.components.map(component => 
    <li><p onClick={props.componentSelect}>{component}</p></li>
  )

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default ComponentBlockList;
