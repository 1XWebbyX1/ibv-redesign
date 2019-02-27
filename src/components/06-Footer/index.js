import React from 'react'
import List from './List'
import data from './data/content.js'

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(e){
    window.location.href = e.target.value
  }

  render(){

    return(
      <footer className='Footer'>
        <div className='Footer__nav'>
          <List data={data[0]} />
          <List data={data[1]} />
          <List data={data[2]} />
          <List data={data[3]} />
      {/*  <label className='list__header'><h4>Select a country/region</h4></label>
        <select name="country" className='selector' onChange={this.redirect}>
          <option value='https://www.ibm.com/services/us/gbs/thoughtleadership/' selected>United States - English</option>
          <option value='https://www.ibm.com/af-en/?lnk=fcc'>Afghanistan - English</option>
          <option value='https://www.ibm.com/af-en/?lnk=fcc'>Bahamas - English</option>
          <option value='https://www.ibm.com/af-en/?lnk=fcc'>Cambodia - English</option>
          <option value='https://www.ibm.com/dk-da/?lnk=fcc'>Denmark - English</option>
        </select>*/}
        </div>
        <div className='Footer__base'>
          <a href='https://www.ibm.com/contact/us/en/?lnk=flg-cont-usen'>Contact</a>
          <a href='https://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen'>Privacy</a>
          <a href='https://www.ibm.com/legal/us/en/?lnk=flg-tous-usen'>Terms of use</a>
          <a href='https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen'>Accessibility</a>
          <a href='https://www.ibm.com/services/us/gbs/thoughtleadership/#'>Feedback</a>
        </div>
      </footer>
    )
  }
}


export default Footer;
