// React support
import React, { Component, useEffect } from "react";
import {connect} from 'react-redux';
// Styling
import "./App.css";
// Components
import {SmurfList} from './smurfs/SmurfList';
// Actins
import {getSmurf} from '../store/actions';

function App({getSmurf, smurf}) {
  
  useEffect(() => {
      getSmurf();
  },[getSmurf])

  


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {getSmurf}
        <SmurfList smurf={smurf}/>
      </div>
    );
};

const mapToStateProps = state => {
  return{
    smurf:state.smurf
  }
};

export default connect(mapToStateProps,{getSmurf})(App);
