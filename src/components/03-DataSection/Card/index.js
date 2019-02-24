import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

const Card = (props) => (
  <div className='Card'>
    <div className='Card__content-wrap'>
      <img className='Card__img' src={props.data.image} alt={props.data.image+'-thumb'}/>
      <div className='Card__content'>
        <h3 className='Card__header'>{props.data.heading}</h3>
        <p>{props.data.description}</p>
      </div>
   </div>
    <div className='Card__link-wrap'>
        <a href={props.data.link} target='_blank' rel="noopener noreferrer">Learn more about this topic  <FontAwesomeIcon className='icon' icon={faArrowCircleRight} /></a>
        <a href={props.data.report} target='_blank' rel="noopener noreferrer">Read PDF report  <FontAwesomeIcon className='icon' icon={faArrowCircleRight} /></a>
    </div>
  </div>
)

export default Card;
