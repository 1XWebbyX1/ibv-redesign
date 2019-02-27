import React from 'react'
import SearchForm from './SearchForm'
import logo from './logo.png'
import Dropdown from '../Dropdown'
import data from './data/content.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
  <header className='header'>
    <img src={logo} className='logo' alt='ibm-logo' />
    <div className='menu-wrap'>
      <SearchForm />
      <div className='header__account-menu'>
        <Dropdown data={data[0]} />
        <div className='header__menu-icon'  onClick={props.openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
 </header>
)

export default Header;
