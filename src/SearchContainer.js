import React, { Component } from 'react';
import './App.css';
import Search from "./Search";
import Results from "./Results";
import RemoteCallManager from "./RemoteCallManager";

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      remoteCallManager: new RemoteCallManager(),
      searchResult: null,
      query: null
    };
  }

  render() {
    const result = this.state.searchResult
      ? <Results data={this.state.searchResult}/>
      : <Results/>;
    return (
      <div>
        <Search onSearch={this.onSearch.bind(this)}/>
        {result}
      </div>
    );
  }

  onSearch(query) {
    const { state } = this;
    this.setState({ query });
    state.remoteCallManager.findGithubUser(query)
      .then(res => this.setState({ searchResult: res }))
      .then(() => console.warn(this.state));
  }

}

export default SearchContainer;
