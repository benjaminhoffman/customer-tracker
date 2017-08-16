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
our charts require an array of objects as the output
so this method iterates over each entry in our db
and formats the data to what our charts expect
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
    month: 2017-01,
    bh: 450,
    fg: 200,
    pw: 900
  },
  {
    month: 2017-02,
    ...
  }
]
*/

const formatData = data => {
  // collect all the data, with months as the keys
  let dataByMonthTotal = {}
  let dataByMonthSource = {}
  let dataByMonthChannel = {}

  // data is an obj of "customers": each key is a custID
  // and the value is the customer info
  for (const key in data) {
    const month = data[key].date.slice(0, 7)
    const doctor = data[key].doctor
    const source = data[key].source
    const channel = data[key].channel
    dataByMonthTotal = createDataByMonthObject(dataByMonthTotal, month, doctor)
    dataByMonthSource = createDataByMonthObject(
      dataByMonthSource,
      month,
      source
    )
    if (data[key].source === 'Internet')
      dataByMonthChannel = createDataByMonthObject(
        dataByMonthChannel,
        month,
        channel
      )
  }
  // export an object that holds sorted arrays
  return {
    total: getDataByMonthSortedArray(dataByMonthTotal),
    source: getDataByMonthSortedArray(dataByMonthSource),
    channel: getDataByMonthSortedArray(dataByMonthChannel)
  }
}

const getDataByMonthSortedArray = dataByMonth => {
  return Object.keys(dataByMonth)
    .map(month => dataByMonth[month]) // convert ea month into an array element
    .sort((a, b) => {
      // sort so chart data is ascending by date
      if (a.month < b.month) return -1
      else return 1
    })
}

/*
increment our count each time an entry in our db matches the key
*/
const createDataByMonthObject = (obj, month, key) => {
  // set our nested month obj if it doesnt exist yet
  if (!obj[month]) {
    obj[month] = { month }
  }

  // then check if key exists for this particular month
  // if no, then set its count to 1, otherwise increment it
  if (!obj[month][key]) obj[month][key] = 1
  else obj[month][key]++

  // finally, keep a running total
  if (!obj[month].Total) obj[month].Total = 1
  else obj[month].Total++
  return obj
}

module.exports = {
  limitResults,
  formatData
}
