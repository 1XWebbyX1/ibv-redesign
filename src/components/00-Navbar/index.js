import React from 'react'
import Navigation from './Navigation'
import SideMenu from './SideMenu'
import Header from './Header'

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visibility: 'Menu--hidden',
      position: ''
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    if(top > 50){
      this.setState({
        position: 'dropdown--fixed'
      })
    }else{
      this.setState({
        position: ''
      })
    }
  }

  openMenu(){
     this.setState({
       visibility: 'Menu--visible'
     })
  }

  closeMenu(){
     this.setState({
       visibility: 'Menu--hidden'
     })
  }

  render(){
    return(
      <div>
        <Header openMenu={this.openMenu} />
        <Navigation className={this.state.position}/>
        <SideMenu closeMenu={this.closeMenu} visibility={this.state.visibility}/>
      </div>
    )
  }
}


export default Navbar;
