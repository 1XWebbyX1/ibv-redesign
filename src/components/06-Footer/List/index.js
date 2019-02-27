import React from 'react'

class List extends React.Component{
  render(){
    let list = this.props.data.items.map((a) => {
      return <a href={a.target}>{a.text}</a>;
    })

    return(
        <div className='Footer__list'>
          <h4 className='list__header'>{this.props.data.heading}</h4>
          {list}
        </div>
    )
  }
}


export default List;
