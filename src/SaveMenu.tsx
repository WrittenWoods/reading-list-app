import React, { useState } from 'react';

function SaveMenu({ loadedData }) {

  const [showData, toggleShowData] = useState(false)

  return (
    <div>
      <p>When you're ready to save your information, click "save" below, copy the text and paste it in starterData.ts</p>
      <button onClick={() => toggleShowData(!showData)} >{ showData ? "close" : "save"}</button>
      { showData && <textarea value={"\'" + JSON.stringify(loadedData) + "\'"} readOnly /> }
    </div>
  );
}

export default SaveMenu;
