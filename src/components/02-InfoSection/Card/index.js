import React from 'react'

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
       <a href={props.data.link} target='_blank' rel="noopener noreferrer">{props.data.anchorText}</a>
     </div>
  </div>
)

export default Card;
