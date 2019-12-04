import React, { Component } from 'react';

export class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(this.props)
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleUpdate} placeholder="search..." />
    );
  }
}

export default SearchBar;
