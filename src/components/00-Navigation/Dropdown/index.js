import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Dropdown extends React.Component{
  render(){
    let items = this.props.data.items.map((a) => {
      return <a href={a.target}>{a.text}</a>;
    })

    return(
      <div className='dropdown'>
        <p>{this.props.data.heading}</p>
        <FontAwesomeIcon className='dropdown__arrow-icon' icon={this.props.data.icon} />
        <div className="dropdown__content">
          {items}
        </div>
      </div>
    )
  }
}


export default Dropdown;
