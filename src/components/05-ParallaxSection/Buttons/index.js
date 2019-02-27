import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Buttons = (props) => (
  <div>
    <a href='https://itunes.apple.com/nl/app/ibm-ibv-tablet/id1048781659?l=en&mt=8' target='_blank' rel="noopener noreferrer">
      <button className='btn btn--teal'>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        Download iOS app
     </button>
    </a>
    <a href='https://play.google.com/store/apps/details?id=com.rocksaucestudios.ibm.ibv&hl=en' target='_blank' rel="noopener noreferrer">
      <button className='btn btn--purple'>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
        Download Android app
      </button>
    </a>
    <a href='http://links.mail8.spopessentials8.com/servlet/MailView?ms=MjE0MjY2MgS2&r=OTk0OTMyMDA4MTUS1&j=NjQwMDIwMTEzS0&mt=1&rt=0'>
      <button className='btn btn--white'>
        <FontAwesomeIcon icon={faArrowRight} />
        Read IdeaWatch
      </button>
   </a>
  </div>
)

export default Buttons;
