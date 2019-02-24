import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

class LinksToolbar extends React.Component{
  render(){
    return(
      <div className={'navbar '+this.props.className}>
         <ul className='Links'>
          <li className='Links__header'>IBM Institute for Business Value</li>
          <li className='dropdown'>Studies by topic <FontAwesomeIcon className='dropdown__arrow-icon' icon={faCaretDown} />
           <div className="dropdown__content">
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/cognitivelibrary.html">AI/Cognitive</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/analytics.html">Analytics</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/blockchainlibrary.html">Blockchain</a>
             <a href="https://www.ibm.com/services/insights/c-suite-study">C-suite</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/cloudlibrary.html">Cloud</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/crm.html">Customer experience and marketing strategy</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/digitalreinventionlibrary.html">Digital Reinvention</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/financialmanagement.html">Finance and risk</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/mobilelibrary.html">Mobile</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/scm.html">Operations and supply chain</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/benchmarking/">Performance data and Benchmarking</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/quantum.html">Quantum computing</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/securitylibrary.html">Security</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/strategy-innovation.html">Strategy and innovation</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/hcm.html">Talent and engagement</a>
             <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/technologystrategy.html">Technology strategy</a>
           </div>
          </li>
          <li className='dropdown'>Studies by industry <FontAwesomeIcon className='dropdown__arrow-icon' icon={faCaretDown} />
          <div className="dropdown__content">
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/aerospaceanddefense.html">Aerospace and defense</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/automotive.html">Automotive</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/banking.html">Banking and Financial markets</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/chemical.html">Chemicals and petroleum</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/communications.html">Communications</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/consumer.html">Customer products</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/electronics.html">Electronics</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/energy.html">Energy, environment and utilities</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/globalindustryagendas/">Global industry agendas</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/government.html">Government</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/healthcare.html">Healthcare</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/industrial.html">Industrial products</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/lifesciences.html">Life sciences</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/mediaentertainment.html">Media and entertainment</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/retail.html">Retail</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/traveltransportation.html">Travel and transportation</a>
          </div></li>
          <li className='dropdown'>Studies by region <FontAwesomeIcon className='dropdown__arrow-icon' icon={faCaretDown} />
          <div className="dropdown__content dropdown__content--shrinked">
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/china.html">China</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/germany.html">Germany</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/india.html">India</a>
          <a href="https://www.ibm.com/services/us/gbs/thoughtleadership/japan.html">Japan</a>
          </div></li>
         </ul>
      </div>
    )
  }
}


export default LinksToolbar;
