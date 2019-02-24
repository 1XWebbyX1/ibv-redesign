import React from 'react'

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
        <div className='Footer__links'>
        <ul className='Footer__list'>
         <li><h4 className='list__header'>Discover</h4></li>
         <li><a href='https://www.ibm.com/products?lnk=fdi'>Marketplace</a></li>
         <li><a href='http://www.redbooks.ibm.com/?lnk=fdi'>Redbooks</a></li>
         <li><a href='https://www.ibm.com/services?lnk=fdi'>Services</a></li>
         <li><a href='https://www.ibm.com/industries?lnk=fdi'>Industries</a></li>
         <li><a href='http://research.ibm.com/?lnk=fdi'>IBM Research</a></li>
         <li><a href='https://www.ibm.com/case-studies?lnk=fdi'>Case Studies</a></li>
         <li><a href='https://www.ibm.com/financing?ref=ibmfooter&lnk=fdi'>Financing</a></li>
        </ul>
        <ul className='Footer__list'>
         <li><h4 className='list__header'>Information for...</h4></li>
         <li><a href='http://www.ibm.com/developerworks/?lnk=fif'>Developers</a></li>
         <li><a href='https://www-356.ibm.com/partnerworld/wps/servlet/ContentHandler/partnerworld-home?lnk=fif'>Business Partners</a></li>
         <li><a href='https://www.ibm.com/industries/sled-contracts?lnk=fif'>Federal and state contracts</a></li>
        </ul>
        <ul className='Footer__list'>
         <li><h4 className='list__header'>Connect with us</h4></li>
         <li><a href='https://www.ibm.com/support/home/?lnk=fcw'>Support</a></li>
         <li><a href='https://www.ibm.com/connect/ibm/us-en/?lnk=fcw'>Find a sales rep</a></li>
         <li><a href='https://www-356.ibm.com/partnerworld/wps/bplocator/search.jsp?lnk=fcw'>Find a Business Partner</a></li>
        </ul>
        <ul className='Footer__list'>
         <li><h4 className='list__header'>About IBM</h4></li>
         <li><a href='http://www.ibm.com/employment/?lnk=fab'>Careers</a></li>
         <li><a href='https://www.ibm.com/events?lnk=fab'>Events</a></li>
         <li><a href='http://newsroom.ibm.com/?lnk=fab'>Services</a></li>
         <li><a href='https://www.ibm.com/investor/?lnk=fab'>Latest news</a></li>
         <li><a href='https://www-03.ibm.com/employment/inclusion/?lnk=fab'>Investor relations</a></li>
         <li><a href='http://www.ibm.com/employment/us/diverse/?lnk=fab'>Diversity and inclusion</a></li>
         <li><a href='https://www.ibm.com/ibm/responsibility/?lnk=fab'>Corporate responsibility</a></li>
         <li><a href='http://www.ibm.com/ibm/us/en/?lnk=fab'>About IBM</a></li>
         <li>
          <label className='list__header'><h4>Select a country/region</h4></label>
          <select name="country" className='selector' onChange={this.redirect}>
              <option value='https://www.ibm.com/services/us/gbs/thoughtleadership/' selected>United States - English</option>
              <option value='https://www.ibm.com/af-en/?lnk=fcc'>Afghanistan - English</option>
              <option value='https://www.ibm.com/af-en/?lnk=fcc'>Bahamas - English</option>
              <option value='https://www.ibm.com/af-en/?lnk=fcc'>Cambodia - English</option>
              <option value='https://www.ibm.com/dk-da/?lnk=fcc'>Denmark - English</option>
           </select>
           </li>
        </ul>
        </div>
        <ul className='Footer__base'>
         <li><a href='https://www.ibm.com/contact/us/en/?lnk=flg-cont-usen'>Contact</a></li>
         <li><a href='https://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen'>Privacy</a></li>
         <li><a href='https://www.ibm.com/legal/us/en/?lnk=flg-tous-usen'>Terms of use</a></li>
         <li><a href='https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen'>Accessibility</a></li>
         <li><a href='https://www.ibm.com/services/us/gbs/thoughtleadership/#'>Feedback</a></li>
        </ul>
      </footer>
    )
  }
}


export default Footer;
