import React, { Component } from 'react'
import './AssetContainer.css'
import { connect } from 'react-redux'
import { actionTypes } from '../action/asset'
import { createAsset } from '../action/asset'
import { dispatch } from '../store/index'

import { bindActionCreators } from 'redux'

class AssetContainer extends Component {
  render() {
    return (
      <div id = "asset-container-wrapper">
        <div className = "asset1" onClick={this.createAsset}></div>
      </div>
    )
  }

  createAsset= () => {
    dispatch(createAsset('Square'))
  }
  
}

const mapStateToProps= (state) => {
  return {
    assets: state.context
  } 
}

const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...actionTypes }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AssetContainer)