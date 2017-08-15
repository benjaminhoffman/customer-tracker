const moment = require('moment')

// limit the results to a specific date range
const limitResults = (start, end, data) => {
  const obj = {}
  for (let key in data) {
    const date = moment(data[key].date)
    let isAfterStart
    let isBeforeEnd

    // sometimes firebase dates are malformed so we protect against that
    try {
      isAfterStart = moment(start).isBefore(date)
      isBeforeEnd = moment(end).isAfter(date)
    } catch (e) {
      // swallow error bc nbd
    }
    if (isAfterStart && isBeforeEnd) obj[key] = data[key]
  }
  return obj
}

// our charts require an array of objects
// this utility method formats the data to what our charts expect
const formatData = data => {
  const arr = []
  for (const key in data) arr.push(data[key])
  return arr
}

module.exports = {
  limitResults,
  formatData
}
