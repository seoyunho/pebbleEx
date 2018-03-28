import React, { Component } from 'react'
import MainContainer from './MainContainer'
import AssetContainer from './AssetContainer'

class App extends Component {
  render() {
    return (
      <div>
        <AssetContainer/>      
        <MainContainer/>
      </div>
    )
  } 
}

export default App
