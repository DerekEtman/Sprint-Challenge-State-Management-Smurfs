// React support
import React, { Component, useEffect } from "react";
import {connect} from 'react-redux';
// Styling
import "./App.css";
// Components
import {SmurfList} from './smurfs/SmurfList';
import {AddSmurf} from './add/AddSmurf';
// Actins
import {getSmurf} from '../store/actions';
import {addSmurf} from '../store/actions';

function App({getSmurf, smurf, addSmurf}) {

  useEffect(() => {
      getSmurf();
  },[getSmurf])

  const importSmurf = (name,age,height) => {
    console.log("IMPORTSTUFF: ", name,age,height);
    addSmurf(name,age,height);
  }


    return (
      <div className="App">
        <h1>Smurf Concensus 2019</h1>
        <p> Please fill out the data requested</p>
        <AddSmurf importSmurf={importSmurf}/>
        <SmurfList smurf={smurf}/>
      </div>
    );
};

const mapToStateProps = state => {
  return{
    smurf:state.smurf
  }
};

export default connect(mapToStateProps,{getSmurf, addSmurf})(App);
