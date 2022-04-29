import React, { useState, useEffect } from 'react';
import TableRow from "./TableRow"
import { applyUserInputs } from "./helpers/applyUserInputs";

function MediaTable({ appState }) {

  const [loadedData, setLoadedData, userInputs] = appState

  // Represents the portion and order of loadedData that's displayed to user

  const [displayedData, setDisplayedData] = useState(applyUserInputs(loadedData, userInputs))

  // Updates displayed data whenever user makes a change to sort/filter parameters or to loaded table data

  useEffect(() => {
    setDisplayedData(applyUserInputs(loadedData, userInputs))
  }, [loadedData, userInputs])

  // Adds a new item to the loadedData state on App.tsx

  function addNewItem() {
    setLoadedData([
      ...loadedData,
      {
        title: "new item",
        tags: ["add tags here"],
        runtime: 0,
        interest: 0
      }
    ])
  }

  // TSX return

  return (
    <>
    <table>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td>Title</td>
          <td>Tags</td>
          <td>Runtime</td>
          <td>Interest Level</td>
        </tr>
      </thead>
      <tbody>
        {displayedData.map( x =>
          <TableRow
            appState={appState}
            rowData={x.rowData}
            rowIndex={x.rowIndex}
            key={x.rowData.title + x.rowIndex}
          /> )}
      </tbody>
    </table>
    <button onClick={() => addNewItem()}>Add New</button>
    </>
  );
}

export default MediaTable;
