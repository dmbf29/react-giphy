import React, { Component } from 'react';
import Gif from './gif';

export class GifList extends Component {

  clickGifFromList = (src) => {
    this.props.selectGif(src);
  }

  render() {

    // const gifs = [
    //   "https://media.giphy.com/media/LxSFsOTa3ytEY/giphy.gif",
    //   "https://media.giphy.com/media/dBZnwwejzgf92kl7tD/giphy.gif"
    // ]

    return (
      <div>
        {this.props.gifs.map( gif => <Gif id={gif.id} key={gif.id} clickGifFromList={this.clickGifFromList} />)}
      </div>
    );
  }
}

export default GifList;
