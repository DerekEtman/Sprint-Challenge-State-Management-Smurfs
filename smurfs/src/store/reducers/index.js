import{ GET_SMURF_SUCCESS, GET_SMURF } from '../actions';

const initialState = {
    isFetching: false,
    error: '',
    smurf:{
        name: "Test",
        age: 0,
        height: "5cm",
        id: 0
      }
}

export const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case GET_SMURF:
            return {
                ...state,
                isFetching: true,
                error:''
            };
        case GET_SMURF_SUCCESS:
            const gss = {
                ...state,
                smurf: action.payload
            };
            return gss;
        default:
            return state;
    }
}