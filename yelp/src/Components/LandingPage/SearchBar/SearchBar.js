import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <div className="field has-addons">
            <div className="control">
                <input classNAme="input" type="text" placeholder="input"/>
            </div>
            <div className="control">
                <button className="button is-info">
                    Search
                </button>
            </div>
        </div>
    );
  }
}
  
export default SearchBar;