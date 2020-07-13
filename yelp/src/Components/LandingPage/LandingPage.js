import React, {Component} from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { search:" " };
  }

  render() {
    return (
      <div>
        <p>this is landing</p>
        <SearchBar></SearchBar>
        <SearchResults></SearchResults>
      </div>
    );
  }
}

export default LandingPage;