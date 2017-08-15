const sources = [
  'Physician',
  'Cedars',
  'Internet',
  'Insurance',
  'Family',
  'Lapeer',
  'Saban',
  'Other'
]

const channel = ['Bing', 'Google', 'Yahoo', 'Yelp', 'Other']

const doctors = ['gh', 'ef', 'lc']

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

export { sources, channel, doctors, radios }
