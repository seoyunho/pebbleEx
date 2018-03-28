import React, { Component } from 'react'
import Asset from './Asset'
import './MainContainer.css'
import { connect } from 'react-redux'
import { actionTypes } from '../action/asset'
import { selectAsset, moveAsset } from '../action/asset'
import { dispatch } from '../store/index'

import { bindActionCreators } from 'redux'

class MainContainer extends Component {
  constructor(props){
    super(props)

    this.xInElement = 20
    this.yInElement = 20
    this.mouseDowned = false
  }
  render() {
    return (
      <div id= "main-wrapper" 
           onMouseUp= {this.handleMouseUp}
           onMouseDown= {this.handleMouseDown}
           onMouseMove= {this.handleMouseMove}>
        {this.assetCreator(this.props.context.assets)}
      </div>
    )
  }

  assetCreator = (assets) => {
    return assets.map((asset, index) => {               
      return <Asset key={index} 
                    id={'ASSET' + asset.id} 
                    x={asset.x} 
                    y={asset.y} 
                    type={asset.type}/>
    })
  }

  handleMouseDown= (e) => {
    if(e.target.id.includes('ASSET')) {
      this.mouseDowned= true
      this.xInElement= e.pageX - 300
      this.yInElement= e.pageY
      dispatch(selectAsset(e.target.id.replace('ASSET', '') - 1))
    }else {
      this.mouseDowned=false
    }
  }

  handleMouseUp= (e) => {
    this.mouseDowned= false
    dispatch(selectAsset(-1))
  }
  
  handleMouseMove= (e) => { 
    if(this.mouseDowned) {
      let x= e.pageX - 300
      let y= e.pageY
      let afterX = parseInt(this.props.context.assets[this.props.context.selected].x) + (x - this.xInElement)
      let afterY = parseInt(this.props.context.assets[this.props.context.selected].y) + (y - this.yInElement)
      this.xInElement= x
      this.yInElement= y
      
      if(afterX < 0) {
        this.mouseDowned=false
        return
      }        
      dispatch(moveAsset(afterX, afterY))
      
    }
  }


}

const mapStateToProps= (state) => {
  return {
    context: state.context
  } 
}

const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)