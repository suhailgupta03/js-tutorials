import React from "react";

export class Component3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // trigger a server request
        setInterval(() => {
            fetch("https://jsonplaceholder.typicode.com/comments")
            .then(r => r.json())
            .then(r => {
                // calling the method of the parent component
                this.props.shareComments(r);
            })
        }, 5000);
    }

    render() {
        return <p></p>
    }
}