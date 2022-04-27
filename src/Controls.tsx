import React, { useState } from 'react';

function Controls({ userInputs, setUserInputs }) {

  const [userInput, setUserInput] = useState("")

  function handleSubmitButtonClick () {
    setUserInputs([...userInputs, ...userInput.split(", ")])
    setUserInput("")
  }

  return (
    <>
      <ul>{userInputs.map( (x, index) => <li key={x + index} >{x}</li> )}</ul>
      <textarea value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => handleSubmitButtonClick()}>submit</button>
    </>
  );
}

export default Controls;
