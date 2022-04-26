import React, { useState, useEffect } from 'react';
import './App.css';
import MediaTable from "./MediaTable"
import SaveMenu from "./SaveMenu"
import { starterData } from "./starterData";

function App() {

  const [loadedData, setLoadedData] = useState(starterData)
  const [userInputs, setUserInputs] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <SaveMenu loadedData={loadedData} />
        <textarea value={userInputs} onChange={(e) => setUserInputs(e.target.value)} />
        <MediaTable
          appState={[loadedData, setLoadedData, userInputs]}
        />
      </header>
    </div>
  );
}

export default App;
