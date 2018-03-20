import React, { Component } from 'react';
import MainContainer from './MainContainer'
import AssetContainer from './AssetContainer'

class App extends Component {
  render() {
    return (
      <div>
        <MainContainer/>
        <AssetContainer/>      
      </div>
    );
  } 
}

export default App;
