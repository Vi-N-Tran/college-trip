import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {item:"", submitItem:""};
  }

  search = (event) => {
    this.setState({ item: event.target.value });
  }

  submit = () =>{
    this.setState({ item: ""})
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="input" value={this.state.item} onChange={this.search}/>
            </div>
            <div className="control">
                <button className="button is-info" onClick={this.submit}>
                    Search
                </button>
            </div>
            {this.state.item}
        </div>
      </form>
    );
  }
}
  
export default SearchBar;