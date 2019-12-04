import React, { Component } from 'react';
import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGif: "https://media.giphy.com/media/LxSFsOTa3ytEY/giphy.gif"
    }
  }

  changeSelection = (src) => {
    this.setState({
      selectedGif: src
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif src={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.changeSelection} />
        </div>
      </div>
    );
  }
}

export default App;
