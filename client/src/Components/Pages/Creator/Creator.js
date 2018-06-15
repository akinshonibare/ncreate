import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import styles from "./Creator.scss";
import axios from "axios";

class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = { creator: {} };
  }
  newCreator = () => {
    axios
      .post("/creators", {
        firstName: "ak",
        lastName: "sh",
        email: "aksg@ex.com",
        password: "123pass"
      })
      .then(res => this.setState({ creator: res.data }))
      .catch(e => this.setState({ error: e }));
  };
  render() {
    return (
      <Jumbotron>
        <div className={styles.header}>
          <h3 onClick={this.newCreator}>become a creator</h3>
        </div>
        
        <div>
          name: {this.state.creator.firstName}
          lname: {this.state.creator.lastName}
          email: {this.state.creator.email}
          password: {this.state.creator.password}
        </div>
      </Jumbotron>
    );
  }
}

export default Creator;
