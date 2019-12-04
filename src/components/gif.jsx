import React, { Component } from 'react';

export class Gif extends Component {
  clickGif = () => {
    // console.log(event);
    this.props.clickGifFromList(this.props.src);
  }

  render() {
    return (
      <img src={this.props.src} className="gif" onClick={this.clickGif} />
    );
  }
}

export default Gif;
