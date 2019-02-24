import React from 'react'
import PopularInsight from './PopularInsight'
import Card from '../Card'
import data from './data/content.jsx'

class InsightSection extends React.Component{
  render(){
    return(
      <section className='insight Section--data-section'>
        <h1 className='data-section__header'>Newest Expert Insights reports </h1>
        <p className='data-section__description'>Fast reads featuring opinions of thought leaders on newsworthy business and related technology topics</p>
        <div className='cards-wrap'>
          <Card data={data[0]} />
          <Card data={data[1]} />
          <Card data={data[2]} />
          <Card data={data[3]} />
          <Card data={data[4]} />
          <Card data={data[5]} />
        </div>
        <PopularInsight />
      </section>
    )
  }
}


export default InsightSection;
