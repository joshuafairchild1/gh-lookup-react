import React, { Component } from 'react';

export const SearchType = { USER: 'user', REPO: 'repository' };
const { USER, REPO } = SearchType;

class Search extends Component {

  render() {
    const { usernameInput, repoInput } = this.props;
    switch (this.props.searchType) {
      case USER:
        return (
          <div>
            <h1>Search for a Github user</h1>
            <input
              value={usernameInput}
              onChange={event => this.props.inputChanged(event, USER)}/>
            {!!this.props.usernameInput
              ? <button onClick={() => this.props.searchUsername(usernameInput)}>
                  Search
                </button>
              : <div> </div>}
          </div>
        );
      case REPO:
        return (
          <div>
            <h1>Search for a Github repository</h1>
            <div>
              <label>Repository name (required)</label>
              <input
                value={repoInput}
                onChange={event => this.props.inputChanged(event, REPO)}/>
            </div>
            <div>
              <label>Username (optional)</label>
              <input
                value={usernameInput}
                onChange={event => this.props.inputChanged(event, USER)}/>
            </div>
            {!!this.props.repoInput
              ? <button onClick={() => this.props.searchRepo(repoInput, usernameInput)}>
                  Search
                </button>
              : <div> </div>}
          </div>
        );
      default:
        return (
          <div>
            <h2>What would you like to search for?</h2>
            <button onClick={() => this.props.setSearchType(USER)}>GitHub User</button>
            <button onClick={() => this.props.setSearchType(REPO)}>GitHub Repository</button>
          </div>
        );
    }
  }
}

export default Search;
