import React, { Component } from 'react'
import Square from './assets/Square'

class Asset extends Component {
  render() {
    return (
      <div>
        {this.renderingAsset()}
      </div>
    )
  }

  renderingAsset= () => {
    if(this.props.type === 'Square') {
      return <Square id={this.props.id} 
                     x={this.props.x} 
                     y={this.props.y}/>
    } 
  }
}

export default Asset