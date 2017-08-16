import React from 'react'
import styles from './Tabs.css'
import { NavLink } from 'react-router-dom'

const Tabs = ({ tabs, onTabClick }) => {
  return (
    <header className={styles.wrapper}>
      <nav>
        {tabs.map(tab =>
          <NavLink
            to={`/${tab.value.toLowerCase()}`}
            className={styles.tab}
            activeClassName="selected"
            onClick={() => onTabClick(tab.value)}
            key={tab.value}
          >
            {tab.name}
          </NavLink>
        )}
      </nav>
    </header>
  )
}

export default Tabs
