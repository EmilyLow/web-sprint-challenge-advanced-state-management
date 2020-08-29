import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_ERROR,
    ADD_SMURF
} from "../actions";

//maybe shouldn't be empty?
const  initialState = {
    smurfs: [
        {
            name: "",
            age: "",
            height: "",
            id: ""
        }
    ],
    error: ""

};

export const smurfReducer = (state= initialState, action) => {

    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
            //May need to edit action.payload bit. May not need to be inside array
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state, 
                smurfs: action.payload,
                isFetching: false
            }
            //Possibly edit this too
        case FETCHING_SMURF_ERROR:
            return {...state, error: action.payload};
            //And this
        case ADD_SMURF:
            return {...state, smurfs: action.payload};
        default:
            return state;
    }




}