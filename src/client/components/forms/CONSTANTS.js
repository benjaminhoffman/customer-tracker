const sources = [
  'Select',
  'Physician',
  'Cedars',
  'Internet',
  'Insurance',
  'Family',
  'Lapeer',
  'Saban',
  'Other'
]

const internetSources = ['Select', 'Bing', 'Google', 'Yahoo', 'Yelp', 'Other']

const doctors = ['Select', 'Hoffman', 'Firoozmand', 'Capiendo']

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
      checked: 'usa',
      id: 'countryUSA',
      name: 'country',
      value: 'usa',
      inputText: 'USA'
    },
    {
      checked: 'other',
      id: 'countryOther',
      name: 'country',
      value: 'other',
      inputText: 'Other'
    }
  ]
}
export { sources, internetSources, doctors, radios }
