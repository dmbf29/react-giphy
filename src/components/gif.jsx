import React, { Component } from 'react';

export class Gif extends Component {
  clickGif = () => {
    if (this.props.clickGifFromList) {
      this.props.clickGifFromList(this.props.id);
    }
  }

  render() {
    let src = ""
    if (this.props.id) {
      src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    }
    return (
      <img src={src} className="gif" onClick={this.clickGif} />
    );
  }
}

export default Gif;
