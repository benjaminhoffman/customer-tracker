import { NEW_ENTRY_FORM_CHANGE } from '../actions/NewEntryForm'

const initialState = {
  age: '',
  country: 'USA',
  date: new Date().toISOString().substring(0, 10),
  doctor: '',
  gender: 'male',
  initials: '',
  channel: 'Google',
  other: '',
  source: 'Physician',
  zip: ''
}

const newEntryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_ENTRY_FORM_CHANGE:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default newEntryReducer
