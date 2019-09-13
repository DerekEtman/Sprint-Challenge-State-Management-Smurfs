import axios from 'axios';

export const GET_SMURF = "GET_SMURF";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
// export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";



export const getSmurf = () => dispatch => {
    dispatch({type:GET_SMURF});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
        //  console.log("AXIOS GET: ", res); 
         dispatch({type:GET_SMURF_SUCCESS, payload:res});  
        })
        .catch( err => console.log("Axios Error: ", err));

}

export const addSmurf = (name,age,height) => dispatch =>{
    console.log("ADDSMURF ITEM: ", name,age,height);
    axios
        .post('http://localhost:3333/smurfs', 
        {name, 
        age, 
        height
        })
        .then(res => {
         console.log("AXIOS ADD_SMURF GET: ", res);  
         dispatch({type:ADD_SMURF, payload:res})
        })
        .catch( err => console.log("Axios Error: ", err));
}