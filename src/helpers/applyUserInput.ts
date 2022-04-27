export function applyUserInput(str, arr) {

  let result = arr

  if (/(\+|\-)(\d)+/.test(str)) {
    let modifier = str.match(/(\+|\-)(\d)+/)[0]
    let tag = str.replace(/(\+|\-)(\d)+ /, "")
    for (let i = 0; i < result.length; i++) {
      if (result[i].tags.includes(tag)) {
        result[i].interest = result[i].interest + Number(modifier)
      }
    }
  }

  return result

}
