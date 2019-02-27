import React from 'react'

class SubMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      icon: '+',
      activeState: '',
      menuState: 'Menu--minimized'
    }
    this.content = this.props.content;
    this.expand = this.expand.bind(this);
  }

  expand(){
    console.log('called');
    if(this.state.menuState === 'Menu--minimized'){
      this.setState({
        icon: '-',
        activeState: 'Menu--active',
        menuState: 'Menu--expanded'
      })
    }else{
      this.setState({
        icon: '+',
        activeState: '',
        menuState: 'Menu--minimized'
      })
    }
  }


render(){
  let listItems = this.content.list.map((item) => {
    return <li className='list__item'>{item}</li>;
  })
  return(
    <div>
      <div className={'item__sub-div '+this.state.activeState} onClick={this.expand}>
        <p className='item--descriptor'>{this.content.heading}</p>
        <div className='item__plus-icon'>{this.state.icon}</div>
      </div>
      <ul className={'Menu__list '+ this.state.menuState}>
        {listItems}
      </ul>
    </div>
  )
 }
}

export default SubMenu;
