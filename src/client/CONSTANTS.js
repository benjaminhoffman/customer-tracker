const sources = [
  'Physician',
  'Cedars',
  'Internet',
  'Insurance',
  'Friend',
  'Lapeer',
  'Saban',
  'Other'
]

const channels = ['Bing', 'Google', 'Yahoo', 'Yelp', 'Other']

const doctors = ['gh', 'ef', 'lc']

const percentages = ['doctors (%)', 'sources (%)', 'channels (%)']

const radios = {
  gender: [
    {
      checked: 'male',
      id: 'genderMale',
      name: 'gender',
      value: 'male',
      inputText: 'Male'
    },
    {
      checked: 'female',
      id: 'genderFemale',
      name: 'gender',
      value: 'female',
      inputText: 'Female'
    }
  ],
  country: [
    {
      checked: 'USA',
      id: 'countryUSA',
      name: 'country',
      value: 'USA',
      inputText: 'USA'
    },
    {
      checked: 'Other',
      id: 'countryOther',
      name: 'country',
      value: 'Other',
      inputText: 'Other'
    }
  ]
}

const chartColors = {
  gh: '#8884d8',
  ef: '#82ca9d',
  lc: '#ff6699',
  Physician: '#8884d8',
  Cedars: '#82ca9d',
  Internet: '#ff6699',
  Insurance: '#4286f4',
  Friend: '#e2f441',
  Lapeer: '#f47041',
  Saban: '#7f41f4',
  Other: '#09f94d',
  Bing: '#f9b809',
  Google: '#82807b',
  Yahoo: '#af95ac',
  Yelp: '#af95ac'
}

export { sources, channels, doctors, radios, chartColors, percentages }
