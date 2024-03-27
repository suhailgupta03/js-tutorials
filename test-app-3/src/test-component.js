import * as React from "react";

export class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundEmail: true
        }
    }
  loadDataFromServer() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(r => r.json())
    .then(r => {
        const filtered = r.filter(item => item.email === "foo@bar.com");
        if(filtered.length === 0) {
            this.setState({
                foundEmail: false
            });
        }
    })
  }

  componentDidMount() {
    // assume that we are making some network
    // call here to fetch data from the server
    this.loadDataFromServer();
  }

  render() {
    if(!this.state.foundEmail) {
        throw new Error("Email not found");
    }
    return <h2>Finding email data..</h2>;
  }
}
