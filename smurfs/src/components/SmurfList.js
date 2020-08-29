import React, { useEffect } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";

const SmurfList = (props) => {
    console.log("SmurfList props", props);
    console.log("Name", props.smurfs[0].name);
    //Currently only having this go off once. Possibly editing so it will go off multiple times.
    //Example does equivalnet of }, [getSmurfs]. Would that cause a load if called somewhere else?
    useEffect(() => {
        props.getSmurfs();
    }, []);

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>Smurf List</h1>
            {props.smurfs.map((smurf) => (
                <div>
                    <h3>Name: {smurf.name}</h3>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => {

    return {smurfs: state.smurfs, isFetching: state.isFetching};
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);