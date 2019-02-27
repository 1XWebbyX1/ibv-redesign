import React from 'react'
import Dropdown from '../Dropdown'
import data from './data/content.js'


class Navbar extends React.Component{
  render(){
    return(
      <nav className={'header header--nav'+this.props.className}>
          <h3 className='nav__heading'>IBM Institute for Business Value</h3>
          <Dropdown data={data[0]} />
          <Dropdown data={data[1]} />
          <Dropdown data={data[2]} />
      </nav>
    )
  }
}


export default Navbar;
