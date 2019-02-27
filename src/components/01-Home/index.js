import React from 'react'
import image from './hero-image.jpg'
import SubNav from './SubNav'
import IconsToolbar  from './IconsToolbar'

class Home extends React.Component{
  render(){
    return(
      <section className='Home'>
        <figure className='figure'>
          <div className='figure__mask' />
          <img src={image} alt='insight-bulb-background' className='Home__hero-img'/>
        </figure>
        <div className='Home__content'>
           <h5 className='services-link'>IBM services   ></h5>
           <h1>IBM Institute for Business Value</h1>
           <h5>Discover business advantage through <br />research-based insights</h5>
        </div>
        <IconsToolbar />
        <SubNav />
      </section>
    )
  }
}


export default Home;
