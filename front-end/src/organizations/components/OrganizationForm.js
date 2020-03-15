import React, { Component } from "react";
<<<<<<< HEAD
import './organization.css'
=======
>>>>>>> master

export default class OrganizationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    // Set state with the new value of the input field
    changeHandler = e => {
        this.setState({
            name: e.target.value
        });
    };

    // Get the name of the organization from the form state
    submitHandler = e => {
        e.preventDefault();
        // The inputed name in a variable
        const organizationName = this.state.name;

        // Return the state to the original so the input field value is cleared
        this.setState({
            name: ""
        });

        // Call the method of the organization login in the parent
        // and pass it the name of the org to be logged in
        this.props.organizationLogin(organizationName);
    };

    render() {
        return (
<<<<<<< HEAD
            <div className="Search">
                <form onSubmit={this.submitHandler}>
                    <label>Organization Name: </label>
                    <br/>
=======
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Organization Name: </label>
>>>>>>> master
                    <input
                        value={this.state.name}
                        onChange={this.changeHandler}
                    ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
