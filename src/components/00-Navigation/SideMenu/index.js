import React from 'react'
import SubMenu from './SubMenu'
import data from './data/content.js'

class Menu extends React.Component{

render(){
  return(
    <aside className={'Menu '+ this.props.visibility}>
       <div className='Menu__close-icon' onClick={this.props.closeMenu}>X</div>
       <div className='Menu__list'>
         <h4 className='item--header'>IBM Institute for Business Value</h4>
         <SubMenu content={data[0]}/>
         <SubMenu content={data[1]}/>
         <SubMenu content={data[2]}/>
     </div>
     <div className='Menu__list'>
        <SubMenu content={data[3]}/>
        <SubMenu content={data[4]}/>
        <p className='item--descriptor'>Industries</p>
        <SubMenu content={data[5]}/>
        <p className='item--descriptor'>Support</p>
     </div>
    </aside>
  )
 }
}

export default Menu;
