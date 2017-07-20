import React from 'react'
import styles from './tabs.css'

const Tabs = ({ tabs, onTabClick }) => {
  return (
    <div className={styles.wrapper}>
      {tabs.map(tab =>
        <div className={styles.tab} onClick={() => onTabClick(tab.value)}>
          {tab.name}
        </div>
      )}
    </div>
  )
}

export default Tabs
