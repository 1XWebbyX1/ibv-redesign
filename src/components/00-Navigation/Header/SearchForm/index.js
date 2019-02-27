import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => (
  <form className="navbar__search-form" action="https://www.ibm.com/Search/" method="get">
      <label className='form__label' for="query">IBM</label>
      <input type="text" className='form__input' maxlength="100" placeholder="Search"
        name="query" id="query" aria-label="Search" autocomplete="off" role="combobox"
        aria-autocomplete="list" aria-expanded="true" aria-owns="ibm-search-typeahead-container" />
      <button type="submit" className="form__search-button" value="Submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
 </form>
)

export default Form;
