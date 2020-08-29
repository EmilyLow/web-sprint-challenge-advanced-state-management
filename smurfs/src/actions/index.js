import axios from "axios";

export const  FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const  FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const  FETCHING_SMURF_ERROR = "FETCHING_SMURF_ERROR";
export const  ADD_SMURF = "ADD_SMURF";
//ADD SMURF ERROR? 

export const getSmurfs = () => (dispatch) => {
    dispatch({type:  FETCHING_SMURF_START});
    axios
    .get("")
    .then((res) => {
        console.log(res);
        //Check payload
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res})
    })
    .catch((err) => {
        console.log(err);
        //Double check payload
        dispatch( {type: FETCHING_SMURF_ERROR, payload: err})
    })




}

//Put POST in here? Add error?
export const addNewSmurf = (smurf) => {
    return {type: ADD_SMURF, payload: smurf}
};