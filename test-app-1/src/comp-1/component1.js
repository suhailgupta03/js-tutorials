import React from "react";

class Component1 extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            userInput: ""
        };
    }

    onChange = (event) => {
        this.setState({
            userInput: event.target.value
        }); // It is maintaining its own state


        
        // It is calling the function that is passed to it
        // as a prop (this is basically a callback)
        // onUserType is a function that is passed 
        // by the parent component as a prop
        console.log("INSIDE COMPONENT 1");
        this.props.onUserType(event.target.value);
    }

    render() {
        return <div className="d-flex flex-row">
            <label>Enter details&nbsp;</label>
            <input type="text" onChange={this.onChange}></input>
        </div>
    }
}


export default Component1;