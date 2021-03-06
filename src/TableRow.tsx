import React, { useState, useEffect } from 'react';

function TableRow({ appState, rowData, rowIndex }) {

  const [loadedData, setLoadedData, userInputs] = appState

  const [title, setTitle] = useState(rowData.title)
  const [tagsText, setTagsText] = useState(rowData.tags.join(", "))
  const [runtime, setRuntime] = useState(rowData.runtime)
  const [interest, setInterest] = useState(rowData.interest)
  const [editRow, toggleEditRow] = useState(false)

  function handleEditButtonClick() {
    if (editRow) {
      let updated = [...loadedData]
      updated[rowIndex] = { title: title, tags: tagsText.split(",").map(x => x.trim()), runtime: runtime, interest: interest }
      setLoadedData(updated)
    }
    toggleEditRow(!editRow)
  }

  function handleDeleteButtonClick() {
    let updated = [...loadedData]
    updated.splice(rowIndex, 1)
    setLoadedData(updated)
  }

  function renderRow() {
    if (editRow) {
      return (
        <tr>
          <td><button onClick={() => handleDeleteButtonClick()}>delete</button></td>
          <td><button onClick={() => handleEditButtonClick()}>save</button></td>
          <td><textarea value={title} onChange={(e) => setTitle(e.target.value)} /></td>
          <td><textarea value={tagsText} onChange={(e) => setTagsText(e.target.value)} /></td>
          <td><textarea value={runtime} onChange={(e) => setRuntime(Number(e.target.value))} /></td>
          <td><textarea value={interest} onChange={(e) => setInterest(Number(e.target.value))} /></td>
        </tr>
      )
    } else if (!editRow) {
      return (
        <tr>
          <td><button onClick={() => handleDeleteButtonClick()}>delete</button></td>
          <td><button onClick={() => handleEditButtonClick()}>edit</button></td>
          <td>{title}</td>
          <td>{tagsText}</td>
          <td>{runtime}</td>
          <td>{interest}</td>
        </tr>
      )
    }
  }

  return (
    <>
      {renderRow()}
    </>
  );
}

export default TableRow;
