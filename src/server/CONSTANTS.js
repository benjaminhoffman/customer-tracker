const fakeData = {
  doctors: [
    { month: '2017-01', ef: 40, Total: 130, gh: 32, lc: 58 },
    { month: '2017-02', lc: 52, Total: 138, ef: 49, gh: 37 },
    { month: '2017-03', lc: 48, Total: 144, gh: 52, ef: 44 },
    { month: '2017-04', lc: 47, Total: 125, gh: 36, ef: 42 },
    { month: '2017-05', ef: 59, Total: 139, gh: 36, lc: 44 },
    { month: '2017-06', lc: 56, Total: 144, ef: 43, gh: 45 },
    { month: '2017-07', lc: 44, Total: 116, ef: 35, gh: 37 },
    { month: '2017-08', lc: 24, Total: 59, gh: 16, ef: 19 }
  ],
  'doctors (%)': [
    { month: '2017-01', ef: 30, gh: 24, lc: 44 },
    { month: '2017-02', lc: 37, ef: 35, gh: 26 },
    { month: '2017-03', lc: 33, gh: 36, ef: 30 },
    { month: '2017-04', lc: 37, gh: 28, ef: 33 },
    { month: '2017-05', ef: 42, gh: 25, lc: 31 },
    { month: '2017-06', lc: 38, ef: 29, gh: 31 },
    { month: '2017-07', lc: 37, ef: 30, gh: 31 },
    { month: '2017-08', lc: 41, gh: 26, ef: 31 }
  ],
  sources: [
    {
      month: '2017-01',
      Physician: 91,
      Total: 130,
      Internet: 18,
      Cedars: 2,
      Friend: 15,
      Insurance: 4
    },
    {
      month: '2017-02',
      Physician: 93,
      Total: 138,
      Internet: 23,
      Friend: 15,
      Other: 1,
      Insurance: 4,
      Cedars: 2
    },
    {
      month: '2017-03',
      Physician: 90,
      Total: 144,
      Friend: 16,
      Internet: 21,
      Lapeer: 2,
      Insurance: 11,
      Cedars: 4
    },
    {
      month: '2017-04',
      Physician: 89,
      Total: 125,
      Internet: 13,
      Friend: 13,
      Cedars: 5,
      Insurance: 5
    },
    {
      month: '2017-05',
      Physician: 93,
      Total: 139,
      Friend: 19,
      Internet: 17,
      Lapeer: 1,
      Cedars: 4,
      Insurance: 5
    },
    {
      month: '2017-06',
      Physician: 93,
      Total: 144,
      Friend: 17,
      Internet: 23,
      Insurance: 7,
      Cedars: 2,
      Other: 1,
      Lapeer: 1
    },
    {
      month: '2017-07',
      Physician: 68,
      Total: 116,
      Internet: 19,
      Insurance: 7,
      Cedars: 8,
      Friend: 10,
      Lapeer: 3,
      Other: 1
    },
    {
      month: '2017-08',
      Physician: 41,
      Total: 59,
      Insurance: 4,
      Friend: 8,
      Internet: 6
    }
  ],
  'sources (%)': [
    {
      month: '2017-01',
      Physician: 70,
      Internet: 13,
      Cedars: 1,
      Friend: 11,
      Insurance: 3
    },
    {
      month: '2017-02',
      Physician: 67,
      Internet: 16,
      Friend: 10,
      Other: 0,
      Insurance: 2,
      Cedars: 1
    },
    {
      month: '2017-03',
      Physician: 62,
      Friend: 11,
      Internet: 14,
      Lapeer: 1,
      Insurance: 7,
      Cedars: 2
    },
    {
      month: '2017-04',
      Physician: 71,
      Internet: 10,
      Friend: 10,
      Cedars: 4,
      Insurance: 4
    },
    {
      month: '2017-05',
      Physician: 66,
      Friend: 13,
      Internet: 12,
      Lapeer: 0,
      Cedars: 2,
      Insurance: 3
    },
    {
      month: '2017-06',
      Physician: 64,
      Friend: 11,
      Internet: 15,
      Insurance: 4,
      Cedars: 1,
      Other: 0,
      Lapeer: 0
    },
    {
      month: '2017-07',
      Physician: 58,
      Internet: 16,
      Insurance: 6,
      Cedars: 6,
      Friend: 8,
      Lapeer: 2,
      Other: 0
    },
    { month: '2017-08', Physician: 68, Insurance: 6, Friend: 13, Internet: 11 }
  ],
  channels: [
    { month: '2017-01', Google: 15, Total: 18, Other: 2, Yelp: 1 },
    { month: '2017-02', Google: 20, Total: 23, Yelp: 3 },
    { month: '2017-03', Google: 12, Total: 21, Yelp: 9 },
    { month: '2017-04', Google: 12, Total: 13, Yelp: 1 },
    { month: '2017-05', Google: 15, Total: 17, Yelp: 2 },
    { month: '2017-06', Google: 20, Total: 23, Yelp: 3 },
    { month: '2017-07', Google: 18, Total: 19, Yelp: 1 },
    { month: '2017-08', Yelp: 3, Total: 6, Google: 3 }
  ],
  'channels (%)': [
    { month: '2017-01', Google: 83, Other: 11, Yelp: 5 },
    { month: '2017-02', Google: 86, Yelp: 13 },
    { month: '2017-03', Google: 57, Yelp: 42 },
    { month: '2017-04', Google: 92, Yelp: 7 },
    { month: '2017-05', Google: 88, Yelp: 11 },
    { month: '2017-06', Google: 86, Yelp: 13 },
    { month: '2017-07', Google: 94, Yelp: 5 },
    { month: '2017-08', Yelp: 42, Google: 42, Yahoo: 14 }
  ]
}

module.exports = { fakeData }
