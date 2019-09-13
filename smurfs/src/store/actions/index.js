import axios from 'axios';

export const GET_SMURF = "GET_SMURF";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";


export const getSmurf = () => dispatch => {
    dispatch({type:GET_SMURF});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
         console.log("AXIOS GET: ", res); 
         dispatch({type:GET_SMURF_SUCCESS, payload:res});  
        })
        .catch( err => console.log("Axios Error: ", err))
}