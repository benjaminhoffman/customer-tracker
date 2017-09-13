import React from 'react'
import styles from './Header.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ tabs, onTabClick }) => {
  return (
    <header className={styles.header} role="banner">
      <nav className={styles.tabs} role="navigation">
        <ul>
          {tabs.map(tab => (
            <li key={tab.value}>
              <NavLink
                to={`/${tab.value.toLowerCase()}`}
                className={styles.tab}
                activeClassName={styles.activeTab}
                onClick={() => onTabClick(tab.value)}
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  tabs: PropTypes.array.isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default Header
