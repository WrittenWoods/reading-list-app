import React, { useState } from 'react';

function SaveMenu({ loadedData }) {

  const [showData, toggleShowData] = useState(false)

  return (
    <div>
      <button onClick={() => toggleShowData(!showData)} >{ showData ? "close" : "save"}</button>
      { showData && <textarea value={"\'" + JSON.stringify(loadedData) + "\'"} readOnly /> }
    </div>
  );
}

export default SaveMenu;
