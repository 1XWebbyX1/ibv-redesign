import React from 'react'
import logo from '../image/ibm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faUser, faTimes} from '@fortawesome/free-solid-svg-icons'

const HeaderNav = (props) => (
  <div className='navbar'>
    <img src={logo} className='navbar__logo' alt='ibm-logo' />
    <div className='navbar--right'>
      <form className="navbar__search-form" action="https://www.ibm.com/Search/" method="get">
        <p>
          <label className='form__label' for="query">IBM</label>
          <input type="text" className='form__input' maxlength="100" placeholder="Search" name="query" id="query" aria-label="Search" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-owns="ibm-search-typeahead-container" />
          <button type="submit" className="form__search-button" value="Submit"><FontAwesomeIcon icon={faSearch} /></button>
        </p>
       </form>
       <div className='navbar__account-menu'>
         <div className='dropdown'><FontAwesomeIcon className='account__user' icon={faUser} />
            <div className="dropdown__content">
             <a href="#">Link 1</a>
             <a href="#">Link 2</a>
             <a href="#">Link 3</a>
            </div>
          </div>
        <div className='navbar__menu-icon'  onClick={props.openMenu}><FontAwesomeIcon icon={faBars} /></div>
      </div>
    </div>
 </div>
)

export default HeaderNav;
