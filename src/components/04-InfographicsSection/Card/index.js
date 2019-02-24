import React from 'react'

const Card = (props) => (
  <div className='Card'>
    <img className='Card__img' src={props.data.image} alt={props.data.image+'-thumb'}/>
    <div className='Card__content'>
    <h3>{props.data.heading}</h3>
     <div className='Card__link-wrap'>
      <a href={props.data.link} target='_blank' rel="noopener noreferrer">Learn more about this IBV study</a>
      <a href={props.data.report} target='_blank' rel="noopener noreferrer">View the infographic</a>
     </div>

    </div>
  </div>
)

export default Card;
