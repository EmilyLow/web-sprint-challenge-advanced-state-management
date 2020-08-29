import React, { useState } from "react";
import { addNewSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfForm = (props) => {

    

    return (
        <div>
            Smurf Form
        </div>
    )
};

const mapStateToProps = (state) => {
    //Different props?
    return {smurfs: state.smurfs, isFetching: state.isFetching};
};

const mapDispatchToProps = { addNewSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);