import React, { useState, useEffect } from 'react';
import './App.css';
import MediaTable from "./MediaTable";
import SaveMenu from "./SaveMenu";
import Controls from "./Controls";
import { starterData } from "./starterData";

function App() {

  const [loadedData, setLoadedData] = useState(starterData)
  const [userInputs, setUserInputs] = useState({ exclude: [], include: ["all tags"], modifiers: [] })

  return (
    <div className="App">
      <header className="App-header">
        <SaveMenu loadedData={loadedData} />
        <Controls userInputs={userInputs} setUserInputs={setUserInputs} />
        <MediaTable
          appState={[loadedData, setLoadedData, userInputs]}
        />
      </header>
    </div>
  );
}

export default App;
