import React, { Component } from 'react'
import render from 'react-dom'


class contentComponent2 extends Component{
  constructor(props){
    super(props)

    this.alertSomething = this.alertSomething.bind(this);
  }

  alertSomething(){
    alert('Alert Something')
  }

  render(){
    const {contentChildName, followers}  = this.props

    return(
        <div className='ui centered column' onClick={this.alertSomething}>
          {contentChildName}
          <hr/>
          {followers}
          <button className="mini ui button">
            Follow Topic
          </button>
        </div>
    )
  }
}

export default contentComponent2
