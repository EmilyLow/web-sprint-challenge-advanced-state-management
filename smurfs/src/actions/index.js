import axios from "axios";

export const  FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const  FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const  FETCHING_SMURF_ERROR = "FETCHING_SMURF_ERROR";
export const  ADD_SMURF = "ADD_SMURF";
//ADD SMURF ERROR? 

export const getSmurfs = () => (dispatch) => {
    console.log("getSmurfs called");
    dispatch({type:  FETCHING_SMURF_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        console.log(res);
        //Check payload
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.log(err);
        //Double check payload
        dispatch( {type: FETCHING_SMURF_ERROR, payload: err})
    })




}

//Put POST in here? Add error?
export const addNewSmurf = (smurf) => (dispatch) => {
    console.log("Smurf added, ", smurf);
    
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
        console.log("res post", res);
        dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch((err) => {
        console.log("Error,", err);
    })
    
   
};