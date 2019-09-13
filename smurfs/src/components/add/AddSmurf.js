import React, { useState, useEffect } from 'react';
// Actions
// import {addSmurf} from '../../store/actions'

export const AddSmurf = (props) => {
    const {importSmurf} = props;
    const[name, setName] = useState();
    const[age, setAge] = useState();
    const[height, setHeight] = useState();
    // console.log("Name: ", name, "Age: ", age, "Hght: ", height );

    const handleNameChanges = e =>{
        setName(e.target.value)
    }

    const handleAgeChanges = e =>{
        setAge(e.target.value)
    }

    const handleHeightChanges = e =>{
        setHeight(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("CLICKED", name, age, height);
        importSmurf(name, age, height);

    }

    return(
      <>
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name: 
                    <input 
                    type="text" 
                    name="smurfName" 
                    className="addSmurfField"
                    value={name}
                    onChange={handleNameChanges}
                    /></p>
                </div>

                <div>
                <p>Age: 
                <input 
                type="number"
                name="smurfAge"
                className="addSmurfField"
                onChange={handleAgeChanges}
                />
                </p>
                </div>

                <div>
                Height: 
                <input
                type="number"
                name="smurfHeight"
                className="addSmurfField"
                onChange={handleHeightChanges}
                />
                </div>
                
                <button className="searchButton" onClick={handleSubmit} >
                    Add a smurf
                </button>
            </form>
        </div>
      </>
    )
};