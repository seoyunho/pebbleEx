import React, { Component } from 'react'
import './Square.css'

class Square extends Component {
  render() {
    return (
      <div id= {this.props.id}
           className= "asset1"
           style= {{top: this.props.y, left: this.props.x}}></div>
    )
  }
}

export default Square