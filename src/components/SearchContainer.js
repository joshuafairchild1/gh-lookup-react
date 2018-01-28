import React, { Component } from 'react';
import Search, { SearchType } from './Search';
import Results from './Results';
import RemoteCallTransport from '../RemoteCallTransport';
import ChangeSearch from './ChangeSearch';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchType: null,
      remoteCallTransport: new RemoteCallTransport(),
      userSearchCache: new Map(),
      repoSearchCache: new Map(),
      repoCollectionCache: new Map(),
      currentSearch: null,
      usernameInput: '',
      repoInput: ''
    };
  }

  render() {
    return (
      <div>
        <ChangeSearch
          setSearchType={this.setSearchType.bind(this)}
          searchType={this.state.searchType}/>
        <Search
          usernameInput={this.state.usernameInput}
          repoInput={this.state.repoInput}
          searchType={this.state.searchType}
          inputChanged={this.inputChanged.bind(this)}
          setSearchType={this.setSearchType.bind(this)}
          searchRepo={this.searchRepo.bind(this)}
          searchUsername={this.searchUsername.bind(this)}/>
        <Results data={this.state.currentSearch}/>
      </div>
    );
  }

  /**
   * @param query {string} GitHub username
   */
  searchUsername(query) {
    const existing = this.state.userSearchCache.get(query);
    if (existing) {
      this.setState({ currentSearch: existing });
      return
    }
    this.state.remoteCallTransport.findGithubUser(query)
      .then(user => {
        this.setState(previous => {
          previous.userSearchCache.set(query, user);
          previous.currentSearch = user;
          return previous;
        })
      });
  }

  searchRepo(repoName, username = null) {
    if (username && typeof username !== 'string') {
      throw new Error('username must be a string' + username)
    }
    const getCache = (state) => !!username
      ? state.repoSearchCache : state.repoCollectionCache,
      existing = getCache(this.state).get(repoName);
    if (existing) {
      this.setState({ currentSearch: existing });
      return
    }
    this.state.remoteCallTransport.findGithubRepo(repoName, username)
      .then(repo => {
        this.setState(prev => {
          getCache(prev).set(repoName, repo);
          prev.currentSearch = repo;
          return prev
        })
      })
  }

  setSearchType(searchType) {
    this.setState({
      searchType, currentSearch: null,
      usernameInput: '', repoInput: ''
    })
  }

  inputChanged(event, type) {
    this.setState({
      [type === SearchType.REPO
        ? 'repoInput'
        : 'usernameInput']: event.target.value
    });
  }

}

export default SearchContainer;
