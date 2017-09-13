export const NEW_ENTRY_FORM_CHANGE = 'NEW_ENTRY_FORM_CHANGE'

const updateNewEntryField = field => {
  const name = Object.keys(field)[0]
  return {
    type: NEW_ENTRY_FORM_CHANGE,
    payload: {
      [`${name}`]: formatValue(name, field[name])
    }
  }
}

// helper func; format form values to match what db expects
const formatValue = (name, val) => {
  switch (name) {
    case 'initials':
      return val.toUpperCase().slice(0, 2)
    case 'zip':
      return val.slice(0, 5)
    case 'age':
      return val.slice(0, 2)
    default:
      return val
  }
}

export default updateNewEntryField
