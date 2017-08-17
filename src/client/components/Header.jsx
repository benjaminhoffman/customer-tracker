import React from 'react'
import styles from './Header.css'
import { NavLink } from 'react-router-dom'

const Header = ({ tabs, onTabClick }) => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.tabs}>
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
        </div>
      </nav>
    </header>
  )
}

export default Header
