import React from 'react'
import styles from './Form.css'

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

const Form = ({ onFormSubmit }) => {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onFormSubmit}>
        {/* DATE */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="date">Date of Appointment:</label>
          </span>
          <input
            id="date"
            type="date"
            name="date"
            className={styles.control}
            value={getToday()}
          />
        </div>
        {/* INITIALS */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="initials">Patient's Initials:</label>
          </span>
          <input
            id="initials"
            type="text"
            name="intials"
            className={styles.control}
          />
        </div>
        {/* GENDER */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="gender">Patient's Gender:</label>
          </span>
          <span className={styles.controlRadio}>
            <label className={styles.labelRadio}>
              <input
                id="gender_male"
                type="radio"
                name="gender"
                value="male"
                checked
              />Male
            </label>
            <label className={styles.labelRadio}>
              <input
                id="gender_female"
                type="radio"
                name="gender"
                value="female"
              />Female
            </label>
          </span>
        </div>
        {/* AGE */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="age">Patient's Age:</label>
          </span>
          <input id="age" type="number" name="age" className={styles.control} />
        </div>
        {/* SOURCE */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="source">Referral Source:</label>
          </span>
          <select name="source" id="source" className={styles.controlSelect}>
            {sources.map(source =>
              <option value={source} key={source}>
                {source}
              </option>
            )}
          </select>
        </div>
        {/* INTERNET */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="internet_sources">Internet:</label>
          </span>
          <select
            name="internet_sources"
            id="internet_sources"
            className={styles.controlSelect}
          >
            {internetSources.map(source =>
              <option value={sources} key={source}>
                {source}
              </option>
            )}
          </select>
        </div>
        {/* OTHER */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="other">Other:</label>
          </span>
          <input
            id="other"
            type="text"
            name="other"
            placeholder="type source here"
            className={styles.control}
          />
        </div>
        {/* DOCTOR */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="doctor">Doctor:</label>
          </span>
          <select name="doctor" id="doctor" className={styles.controlSelect}>
            {doctors.map(doc =>
              <option value={doc} key={doc}>
                {doc}
              </option>
            )}
          </select>
        </div>
        {/* COUNTRY */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="country">Country:</label>
          </span>
          <span className={styles.controlRadio}>
            <label className={styles.labelRadio}>
              <input
                id="country_usa"
                type="radio"
                name="country"
                value="usa"
                checked
              />USA
            </label>
            <label className={styles.labelRadio}>
              <input
                id="country_other"
                type="radio"
                name="country"
                value="other"
              />Other
            </label>
          </span>
        </div>
        {/* ZIP */}
        <div className={styles.group}>
          <span className={styles.labelWrapper}>
            <label htmlFor="zip">Zip Code:</label>
          </span>
          <input id="zip" type="number" name="zip" className={styles.control} />
        </div>
        {/* SUBMIT */}
        <div className={styles.submit}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

function getToday() {
  return new Date().toISOString().substring(0, 10)
}

export default Form
