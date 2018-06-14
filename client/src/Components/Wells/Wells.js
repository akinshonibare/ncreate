import React, { Component } from "react";
import { Well, Collapse } from "react-bootstrap";
import styles from "./Wells.scss";

export class MusicWell extends Component {
  render() {
    return (
      <div>
        <Collapse in={this.props.openMusic}>
          <div>
            <Well>
              <p>Checkout these Music Creators</p>
              <img
                className={styles.thumbnail}
                src="/img/music.jpeg"
                alt="music"
              />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export class ArtWell extends Component {
  render() {
    return (
      <div>
        <Collapse in={this.props.openArt}>
          <div>
            <Well>
              <p>Checkout these art & design Creators</p>
              <img
                className={styles.thumbnail}
                src="/img/artImage.jpeg"
                alt="art"
              />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export class ClothingWell extends Component {
  render() {
    return (
      <div>
        <Collapse in={this.props.openClothing}>
          <div>
            <Well>
              <p>Checkout these Brands from your favourite designers</p>
              <img
                className={styles.thumbnail}
                src="/img/clothing.jpeg"
                alt="clothing"
              />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export class YoutubeWell extends Component {
  render() {
    return (
      <div>
        <Collapse in={this.props.openYoutube}>
          <div>
            <Well>
              <p>Checkout theses youtubers</p>
              <img
                className={styles.thumbnail}
                src="/img/ytImage.jpeg"
                alt="yt"
              />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
