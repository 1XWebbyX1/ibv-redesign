import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faGooglePlus} from '@fortawesome/free-brands-svg-icons'


const IconsToolbar = (props) => (
  <div className='toolbar toolbar--icons'>
     <FontAwesomeIcon className='icon' icon={faFacebook} />
     <FontAwesomeIcon className='icon' icon={faTwitter} />
     <p className='toolbar--descriptor'>Share this Page</p>
     <FontAwesomeIcon className='icon' icon={faLinkedin} />
     <FontAwesomeIcon className='icon' icon={faGooglePlus} />
  </div>
)

export default IconsToolbar;
