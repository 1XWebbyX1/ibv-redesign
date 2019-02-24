import React from 'react'

class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      topicsMenu: 'Menu--minimized'
    }
    this.expand = this.expand.bind(this);
  }

  expand(e){
    var target = e.target;
    var parent = e.target.parentElement;
    target.textContent = (target.textContent === '+') ? '-': '+';
    if(this.state.topicsMenu === 'Menu--minimized'){
      this.setState({
        topicsMenu: 'Menu--expanded'
      })
      parent.classList.add('Menu--active');
    }else{
      this.setState({
        topicsMenu: 'Menu--minimized'
      })
      parent.classList.remove('Menu--active');
    }
  }

render(){
  return(
    <div className={'Menu '+ this.props.visibility}>
       <div className='Menu__close-icon' onClick={this.props.closeMenu}>X</div>
       <ul className='Menu__list'>
         <li ><h4 className='item--header'>IBM Institute for Business Value</h4></li>
         <li ><div className='item__sub-div'><p className='item--descriptor'>Studies by topic</p><div className='item__plus-icon' onClick={this.expand}>+</div></div>
             <ul className={'Menu__list '+this.state.topicsMenu}>
                <li className='list__item'>Careers</li>
                <li className='list__item'>Events</li>
                <li className='list__item'>Services</li>
                <li className='list__item'>Latest news</li>
                <li className='list__item'>Investor relations</li>
                <li className='list__item'>Diversity and inclusion</li>
                <li className='list__item'>Corporate responsibility</li>
                <li className='list__item'>About IBM</li>
             </ul>
         </li>
         <li className='Menu__item'><div className='item__sub-div'><p className='item--descriptor'>Studies by industry</p><div className='item__plus-icon'>+</div></div></li>
         <li className='Menu__item'><div className='item__sub-div'><p className='item--descriptor'>Studies by region</p><div className='item__plus-icon'>+</div></div></li>
     </ul>
     <ul className='Menu__list'>
        <li className='Menu__item'><div className='item__sub-div'><p className='item--descriptor'>Marketplace</p><div className='item__plus-icon'>+</div></div></li>
        <li className='Menu__item'><div className='item__sub-div'><p className='item--descriptor'>Services</p><div className='item__plus-icon'>+</div></div></li>
        <li className='Menu__item'><p className='item--descriptor'>Industries</p></li>
        <li className='Menu__item'><div className='item__sub-div'><p className='item--descriptor'>Developers</p><div className='item__plus-icon'>+</div></div></li>
        <li className='Menu__item'><p className='item--descriptor'>Support</p></li>
     </ul>
    </div>
  )
 }
}

export default Menu;
