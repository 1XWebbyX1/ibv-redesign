import React from 'react'
import Buttons from './Buttons'


class ParallaxSection extends React.Component{
  render(){
    return(
      <section className='Parallax'>
        <div className='Parallax__content'>
          <h1>Pick a favorite channel to access IBV thought leadership </h1>
          <Buttons />
        </div>
      </section>
    )
  }
}


export default ParallaxSection;
