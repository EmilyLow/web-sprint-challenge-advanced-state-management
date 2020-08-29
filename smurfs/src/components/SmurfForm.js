import React, { useState } from "react";
import { addNewSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfForm = (props) => {

        const defaultState = {
            name: "",
            age: "",
            height: ""
        }

        const [formState, setFormState] = useState(defaultState);

        const handleChange = e => {
            setFormState({
                ...formState, [e.target.name]: e.target.value
            })
        }

    return (
        <div>
            <h1>Smurf Form</h1>
            {/* Might need onSubmit so I can supress default */}
            <form onSubmit={props.addNewSmurf(formState)}>
                <label>
                    Name:    
                 <input
                    type = "text"
                    name = "name"
                    value = {formState.name}
                    onChange = {handleChange}
                    />
                </label>
                <br/>
                <label>
                    Age: 
                    <input
                        type = "text"
                        name = "age"
                        value = {formState.age}
                        onChange = {handleChange}
                        />
                </label>
                <br/>
                <label>
                    Height: 
                    <input
                        type = "text"
                        name = "height"
                        value = {formState.height}
                        onChange = {handleChange}
                        />
                </label>
                <br/>
                 <button>Submit</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    //Different props?
    return {smurfs: state.smurfs, isFetching: state.isFetching};
};

const mapDispatchToProps = { addNewSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);