import React, {Component} from 'react';
import SearchResult from './SearchResult.js';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <p>results 2</p>
        <SearchResult/>
      </div>
    );
  }
}

export default SearchResults;