import{ GET_SMURF_SUCCESS, GET_SMURF, ADD_SMURF } from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    smurf:[{
        name: "Test",
        age: 0,
        height: "5cm",
        id: 0
      },]
}

export const reducer = ( state = initialState, action ) => {
    // console.log("REDUCER STATE: ", state.smurf)
    switch(action.type){
        case GET_SMURF:
            return {
                ...state,
                isFetching: true,
                error:''
            };

        case GET_SMURF_SUCCESS:
            // console.log("SUCCESS PL: ", action.payload.data)
            const gss = {
                ...state,
                smurf: action.payload.data
            };
            return gss;

        case ADD_SMURF:
            const addS = console.log("REDUCER ADD_SMURF: ", action.payload)
            return addS;
        default:
            return state;
    }
}