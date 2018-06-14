import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import styles from "./NewCreator.scss";

class NewCreator extends Component {
  render() {
    return (
      <Jumbotron>
        <div className={styles.header}>
          <h3>become a creator</h3>
        </div>
      </Jumbotron>
    );
  }
}

export default NewCreator;
