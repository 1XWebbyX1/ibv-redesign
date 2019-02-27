import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

const Card = (props) => (
  <div className={'Card '+props.className}>
    <div className='Card__content-wrap'>
      <img className='Card__img' src={props.data.image} alt={props.data.image +'-thumb'}/>
      <div className='Card__content'>
        <h3>{props.data.heading}</h3>
        <p>{props.data.description}</p>
      </div>
     </div>
     <div className='Card__link-wrap'>
      <a href={props.data.link.target} target='_blank' rel="noopener noreferrer">
        {props.data.link.text}
        <FontAwesomeIcon className='icon' icon={faArrowCircleRight} />
      </a>
      <a className='report' href={props.data.report.target} target='_blank' rel="noopener noreferrer">
        {props.data.report.text}
        <FontAwesomeIcon className='icon' icon={faArrowCircleRight} />
      </a>
    </div>
  </div>
)

export default Card;
