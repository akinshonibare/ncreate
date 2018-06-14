import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Home.scss";

import Header from "../../Header/Header";
import {
  MusicWell,
  ArtWell,
  ClothingWell,
  YoutubeWell
} from "../../Wells/Wells";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMusic: false,
      openArt: false,
      openClothing: false,
      openYoutube: false
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Jumbotron className={styles.jumbo} />
        </div>
        <div className={styles.bar}>
          <div className="row">
            <div
              className="col-sm-3"
              onMouseOver={() => this.setState({ openMusic: true })}
              onMouseLeave={() => this.setState({ openMusic: false })}
            >
              <Link to="/music">
                <p className={styles.pages}>music</p>
                <MusicWell openMusic={this.state.openMusic} />
              </Link>
            </div>
            <div
              className="col-sm-3"
              onMouseOver={() => this.setState({ openArt: true })}
              onMouseLeave={() => this.setState({ openArt: false })}
            >
              <Link to="/art">
                <p className={styles.pages}>art & design</p>
                <ArtWell openArt={this.state.openArt} />
              </Link>
            </div>
            <div
              className="col-sm-3"
              onMouseOver={() => this.setState({ openClothing: true })}
              onMouseLeave={() => this.setState({ openClothing: false })}
            >
              <Link to="/clothing">
                <p className={styles.pages}>clothing</p>
                <ClothingWell openClothing={this.state.openClothing} />
              </Link>
            </div>
            <div
              className="col-sm-3"
              onMouseOver={() => this.setState({ openYoutube: true })}
              onMouseLeave={() => this.setState({ openYoutube: false })}
            >
              <Link to="/youtube">
                <p className={styles.pages}>youtube</p>
                <YoutubeWell openYoutube={this.state.openYoutube} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.section}>hey</div>
      </div>
    );
  }
}

export default Home;
