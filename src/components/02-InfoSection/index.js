import React from 'react'
import Card from '../Card'
import data from './data/content.js'

class InfoSection extends React.Component{
  render(){
    return(
      <section className='Info'>
        <h1>Information you can use</h1>
        <div className='Info__cards-wrap'>
           <Card data={data[0]} />
           <Card data={data[1]} />
        </div>
      </section>
    )
  }
}


export default InfoSection;
