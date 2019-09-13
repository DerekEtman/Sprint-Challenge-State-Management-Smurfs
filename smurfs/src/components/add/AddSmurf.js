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
        // e.preventDefault();
        console.log("CLICKED", name, age, height);
        importSmurf(name, age, height);
        props.history.push('/');
    }

    return(
      <>
        <div className="smurfBar">
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name: </p>
                    <input 
                    type="text" 
                    name="smurfName" 
                    className="addSmurfField"
                    value={name}
                    onChange={handleNameChanges}
                    />
                </div>

                <div>
                <p>Age: 
                    </p>
                <input 
                type="number"
                name="smurfAge"
                className="addSmurfField"
                onChange={handleAgeChanges}
                />
                </div>

                <div>
                <p>Height: </p>
                <input
                type="number"
                name="smurfHeight"
                className="addSmurfField"
                onChange={handleHeightChanges}
                />
                </div>
                
                <button className="smurfButton" onClick={handleSubmit} >
                    Add a smurf
                </button>
            </form>
        </div>
      </>
    )
};