import React, { useState, useEffect } from 'react';

function Controls({ userInputs, setUserInputs }) {

  const [exclude, setExclude] = useState("")
  const [include, setInclude] = useState("all tags")
  const [modifiers, setModifiers] = useState("")

  // Changes userInputs state on App.tsx whenever user adds inputs

  useEffect(() => {
    setUserInputs({
      exclude: exclude.split(",").map( x => x.trim()),
      include: include.split(",").map( x => x.trim()),
      modifiers: modifiers.split(",").map( x => x.trim())
    })
  }, [exclude, include, modifiers])

  // Renders text input areas that determine which tags the user wants to include, exclude or prioritize

  return (
    <span>
      <p>Limit the table to items that have the following tags:</p>
      <textarea value={include} onChange={(e) => setInclude(e.target.value)} />

      <p>Exclude all items that have the following tags:</p>
      <textarea value={exclude} onChange={(e) => setExclude(e.target.value)} />

      <p>Modifiers:</p>
      <textarea value={modifiers} onChange={(e) => setModifiers(e.target.value)} />
    </span>
  );
}

export default Controls;
