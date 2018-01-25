import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: null
    }
  }

  render() {
    return (
      <div>
        <h1>Search for a Github user</h1>
        <input onChange={this.inputChanged.bind(this)}/>
        <button onClick={() => this.props.onSearch(this.state.input)}>Search</button>
      </div>
    );
  }

  inputChanged(event) {
    this.setState({input: event.target.value})
  }
}

export default Search;
