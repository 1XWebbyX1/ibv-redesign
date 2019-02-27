import React from 'react'
import Card from '../Card'
import data from './data/content.jsx'

class InfographicSection extends React.Component{
  render(){
    return(
      <section className='Infographic'>
        <h1>Featured infographics</h1>
        <p>A visual approach to our data, analysis and recommendations</p>
        <div className='Infographic__cards-wrap'>
          <Card data={data[0]} />
          <Card data={data[1]} />
          <Card data={data[2]} />
          <Card data={data[3]} />
          <Card data={data[4]} />
          <Card data={data[5]} />
        </div>
      </section>
    )
  }
}


export default InfographicSection;
