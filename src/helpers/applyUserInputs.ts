export function applyUserInputs(tableData, inputs) {

  let result = tableData.map( (x, index) => ( { rowIndex: index, rowData: x, rank: x.interest } ))

  inputs.exclude.forEach( input => result = result.filter( x => !x.rowData.tags.includes(input)))

  if (!inputs.include.includes("all tags")) {
    result = result.filter( x => x.rowData.tags.some( tag => inputs.include.includes(tag)))
  }

  let modifier = 0
  let modified = ""
  for (let i = 0; i < inputs.modifiers.length; i++) {
    if (/(\+|\-)(\d)+/.test(inputs.modifiers[i])) {
      modifier = Number(inputs.modifiers[i].match(/(\+|\-)(\d)+/)[0])
      modified = inputs.modifiers[i].replace(/(\+|\-)(\d)+/, "").trim()
      result.forEach( x => {
        if (x.rowData.tags.includes(modified)) {
          x.rank = x.rank + modifier
        }
      });
      modifier = 0
      modified = ""
    }
  }

  result.sort(function (a, b) {
    return b.rank - a.rank
  })

  return result

}
