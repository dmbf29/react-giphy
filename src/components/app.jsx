import React, { Component } from 'react';
import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';
import giphy from 'giphy-api'
// var giphy = require('giphy-api')();
const GIPHY_API_KEY = 'jhvWr2xzdfoaU7kq0QRr7I0wxwpxaoMB'

class App extends Component {
  constructor(props) {
    super(props)
    this.search('funny')
    this.state = {
      selectedGifId: "lszAB3TzFtRaU",
      gifs: []
    }
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        limit: 12
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  changeSelection = (src) => {
    this.setState({
      selectedGifId: src
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} clickGifFromList={this.clickGifFromList} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.changeSelection} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
