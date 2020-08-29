import React, { useEffect } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";

const SmurfList = (props) => {

    //Currently only having this go off once. Possibly editing so it will go off multiple times.
    //Example does equivalnet of }, [getSmurfs]. Would that cause a load if called somewhere else?
    useEffect(() => {
        getSmurfs();
    }, []);

    return (
        <div>
            Smurf List
        </div>
    )
};

const mapStateToProps = (state) => {

    return {smurfs: state.smurfs, isFetching: state.isFetching};
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);