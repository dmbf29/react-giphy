import React, { Component } from 'react';
import { Gif } from './gif';

export class GifList extends Component {
  clickGifFromList = (src) => {
    const { selectGif } = this.props;
    selectGif(src);
  }

  render() {
    const { gifs } = this.props;

    return (
      <div className="gif-list">
        {gifs.map(gif => (
          <Gif
            id={gif.id}
            key={gif.id}
            clickGifFromList={this.clickGifFromList}
          />
        ))}
      </div>
    );
  }
}

export default GifList;
