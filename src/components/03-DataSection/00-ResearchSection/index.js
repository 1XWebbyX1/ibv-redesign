import React from 'react'
import Card from '../../Card'
import data from './data/content.jsx'
import PopularResearch from './PopularResearch'

class ResearchSection extends React.Component{
  render(){
    return(
      <section className='research Section--data-section'>
        <h1 className='data-section__header'>IBV Research</h1>
        <p className='data-section__description'>Fact-based, strategic insights for business executives on critical public and private sector issues</p>
          <div className='cards-wrap'>
             <Card data={data[0]} />
             <Card data={data[1]} />
             <Card data={data[2]} />
             <Card data={data[3]} />
             <Card data={data[4]} />
             <Card data={data[5]} />
          </div>
          <PopularResearch />
      </section>
    )
  }
}


export default ResearchSection;
