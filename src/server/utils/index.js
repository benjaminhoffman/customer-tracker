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

/*
our charts require an array of objects
this utility method formats the data to what our charts expect
input:
  {
    entryId: {
      age: "67"
      country: "USA"
      date: "2017-06-06"
      doctor: "ef"
      gender: "male"
    },
    entryId2: { ... }
  }

output: [
  {
    month: 2017-01-01,
    bh: 450,
    fg: 200,
    pw: 900
  },
  {
    month: 2017-02-01,
    ...
  }
]
*/

const formatData = data => {
  // collect all the data, with months as the keys
  const dataByMonth = {}
  for (const key in data) {
    const month = data[key].date.slice(0, 7)
    // set our month obj if it doesnt exist yet
    if (!dataByMonth[month]) {
      dataByMonth[month] = { month }
    }
    // first check if doctor has had a patient yet in this month
    // if no, then set their count to 1, otherwise increment it
    const doctor = data[key].doctor
    if (!dataByMonth[month][doctor]) dataByMonth[month][doctor] = 1
    else dataByMonth[month][doctor]++

    // keep a running total of _all_ patients
    if (!dataByMonth[month].total) dataByMonth[month].total = 1
    else dataByMonth[month].total++
  }
  // export our object to an array of object months (2017-01, 2017-02, etc)
  return Object.keys(dataByMonth)
    .map(month => dataByMonth[month]) // convert ea month into an array element
    .sort((a, b) => {
      // sort so chart data is ascending by date
      if (a.month < b.month) return -1
      else return 1
    })
}

module.exports = {
  limitResults,
  formatData
}
