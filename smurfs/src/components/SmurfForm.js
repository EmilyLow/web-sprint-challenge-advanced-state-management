import React, { useState } from "react";
import { addNewSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfForm = (props) => {

    

    return (
        <div>
            <h1>Smurf Form</h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    //Different props?
    return {smurfs: state.smurfs, isFetching: state.isFetching};
};

const mapDispatchToProps = { addNewSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);