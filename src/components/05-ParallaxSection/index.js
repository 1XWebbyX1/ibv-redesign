import React from 'react'
import Buttons from './Buttons'


class ParallaxSection extends React.Component{
  render(){
    return(
      <section className='parallax'>
       <div className='parallax__cover'>
        <div className='parallax__content'>
          <h1>Pick a favorite channel to access IBV thought leadership </h1>
          <Buttons />
        </div>
       </div>
      </section>
    )
  }
}


export default ParallaxSection;
