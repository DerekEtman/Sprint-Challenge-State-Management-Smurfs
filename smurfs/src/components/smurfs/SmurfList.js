import React from 'react';
import {SmurfCard} from './SmurfCard';


export const SmurfList = (props) => {
    // console.log("SmurfList props: ", props);
    // console.log("SmurfList props.smurf: ", props.smurf);
    // const {smurfdata} = props.smurf;
    // console.log("SmurfList Smurf destruct: ", smurfdata[0]);

    return(
        <>
        <h2>Smurf List</h2>
        <div>
        {props.smurf.map(data => (<SmurfCard key={data.id} data={data} />) )} 
        </div>
        </>
    )
}