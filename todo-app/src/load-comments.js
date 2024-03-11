import React from "react";

// Reference: https://legacy.reactjs.org/docs/react-component.html
// class based component:
// component that is rendered using a CLASS
export class LoadComments extends React.Component { // UsernameInput is a React.Component

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
            posts: []
        };
    }

    // componentDidMount is provided by React
    // This method is called 'ONCE' after every RENDER
    componentDidMount() {
        console.log("INSIDE COMPONENT DID MOUNT");
        // this is the place to make your AJAX calls (fetch)
        // so if you want to load data from the server, this
        // is the method where you must be adding the logic
        fetch("https://jsonplaceholder.typicode.com/posts") // Make the request to load the data from the server
            .then(r => r.json())
            .then(d => {
                this.setState({
                    posts: d
                });
                // Once you set the state, the render method will be called
                // one more time
            })

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/comments") // Make the request to load the data from the server
            .then(r => r.json())
            .then(d => {
                this.setState({
                    posts: []
                });
                // Once you set the state, the render method will be called
                // one more time
            })
        }, 5000)
    }

    // render is a function that is defined in the SUPER
    // CLASS React.Component which is responsible for
    // returning the data that will be RENDERED by this
    // component
    render() {
        console.log("INSIDE RENDER");
        return <div className="mt-5 d-flex flex-column border rounded p-3 bg-light">
                {this.state.posts.map(item => <p>
                    {item.body}
                </p>)}
            </div>
    }
}

