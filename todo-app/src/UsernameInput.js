import React from "react";

// class based component:
// component that is rendered using a CLASS
export class UsernameInput extends React.Component { // UsernameInput is a React.Component

    // React before rendering will create
    // and object of this class and that is 
    // when this constructor will be called
    constructor(props) {
        // props is a simple OBJECT that holds the properties that 
        // are passed when rendering the component
        // <UsernameInput name="foo" />
        // props : {name: "foo"}
        super(props); // calling the parent's class constructor
        // in order for our component to render, the parent component
        // must also be initalized
        this.state = {
            message: "",
            passwordLength: 0,
            defaultClassString: "bg-warning rounded mt-3 p-3 fs-5"
        }
    }

    // componentDidMount is provided by React
    // This method is called 'ONCE' after every RENDER
    componentDidMount() {
        console.log("INSIDE COMPONENT DID MOUNT");
        // this is the place to make your AJAX calls (fetch)
        // so if you want to load data from the server, this
        // is the method where you must be adding the logic
    }

    myCustomHandler = (event) => {
        const password = event.target.value;
        if(password.length < 6) {
            this.setState({
                message: "Your password is too short! It needs to be atleast 6 characters",
                passwordLength: password.length
            })
        }else if(!password.includes("@") || !password.includes("#")) {
            this.setState({
                message: "Your password must have atleast @ or #",
                passwordLength: password.length
            })
        }else if(!password.match(/\d/g)) {
            this.setState({
                message: "Your password must alteast have one digit",
                passwordLength: password.length
            })
        }else {
            this.setState({
                message: "Your password is strong enough!",
                passwordLength: password.length,
                defaultClassString: "bg-success rounded mt-3 p-3 fs-5"
            })
        }
    }

    // render is a function that is defined in the SUPER
    // CLASS React.Component which is responsible for
    // returning the data that will be RENDERED by this
    // component
    render() {
        console.log("INSIDE RENDER");
        return <div className="mt-5 d-flex flex-column border rounded p-3 bg-light">
            <p className="bg-info p-1 fs-5 rounded mb-5">Password Validator</p>
            <input 
                type="password"
                placeholder="Enter your password" 
                className="fs-3 rounded"
                onChange={this.myCustomHandler}
                // when something changes "on input"
                // I should be notified .. and I will be 
                // notified by "myCustomHandler"
            ></input>
            <div className={this.state.defaultClassString}>
                <p>
                    {this.state.message} 
                </p>
                <p>
                    <span>Password Length: {this.state.passwordLength}</span>
                </p>
            </div>
        </div>
    }
}

