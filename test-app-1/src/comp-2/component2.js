import React from "react";

export class Component2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <p>
            Component 2 {this.props.usernameLength}
        </p>
    }
}