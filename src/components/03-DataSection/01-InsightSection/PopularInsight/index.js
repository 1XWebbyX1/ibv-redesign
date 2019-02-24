import React from 'react'
import Card from '../../Card'
import content from './data/content.jsx'

class PopularInsight extends React.Component{
  render(){
    return(
      <section className='Section--popular-data-section'>
        <h1>Most popular IBV Research</h1>
        <div className='cards-wrap'>
          <Card data={content[0]} />
          <Card data={content[1]} />
          <Card data={content[2]} />
          <Card data={content[3]} />
          <Card data={content[4]} />
          <Card data={content[5]} />
          <Card data={content[6]} />
          <Card data={content[7]} />
          <Card data={content[8]} />
        </div>
      </section>
    )
  }
}


export default PopularInsight;
