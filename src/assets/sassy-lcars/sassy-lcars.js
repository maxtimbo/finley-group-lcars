

export class SassyLcars {
  randomNumber(includeFloat = true) {
    let floatOrInt = Math.floor(Math.random() * 2)
    if (!includeFloat) {
      floatOrInt = 1
    }
    if (floatOrInt === 0) {
      const floatLength = (Math.random() * 4)
      const str = (Math.random() * floatLength).toFixed(2)
      return parseFloat(str)
    } else {
      const intLength = Math.floor(Math.random() * 3 + 2)
      let str = ""
      for (let i = 0; i < intLength; i++) {
        const int = Math.floor(Math.random() * 10).toString()
        str += int
      }
      return str
    }
  }
}

