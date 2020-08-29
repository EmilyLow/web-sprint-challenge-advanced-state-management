import React, { useState } from "react";
import { addNewSmurf, getSmurfs } from "../actions";
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

        const submitData = e => {
            e.preventDefault();
            props.addNewSmurf(formState);
            props.getSmurfs();
        }

    return (
        <div>
            <h1>Smurf Form</h1>
            {/* Might need onSubmit so I can supress default */}
            <form onSubmit={submitData}>
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

const mapDispatchToProps = { addNewSmurf, getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);