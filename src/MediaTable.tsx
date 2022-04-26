import React, { useState } from 'react';
import TableRow from "./TableRow"

function MediaTable({ appState }) {

  const [loadedData, setLoadedData, userInputs] = appState

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
        {loadedData.map( (x, index) =>
          <TableRow
            appState={appState}
            rowData={x}
            rowIndex={index}
            key={x.title + index}
          /> )}
      </tbody>
    </table>
    <button onClick={() => addNewItem()}>Add New</button>
    </>
  );
}

export default MediaTable;
