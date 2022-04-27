import React, { useState } from 'react';
import TableRow from "./TableRow"
import { applyUserInput } from "./helpers/applyUserInput";

function MediaTable({ appState }) {

  const [loadedData, setLoadedData, userInputs] = appState

  function toDisplay() {

    let result = [...loadedData]

    // for (let i = 0; i < userInputs.length; i++) {
    //   result = applyUserInput(userInputs[i], result)
    // }

    result.sort( function (a, b) {
      return b.interest - a.interest
    })

    return result

  }

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
        {toDisplay().map( (x, index) =>
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
