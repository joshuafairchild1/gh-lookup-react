import React  from 'react';
import { connect } from 'react-redux';
import {findGithubRepo, findGithubUser, setInputValue, setSearchType} from "../actions";

export const SearchType = { USER: 'user', REPO: 'repository' };
const { USER, REPO } = SearchType;

const Search = ({ usernameInput, repoInput, searchType, ...props }) => {
    switch (searchType) {
      case USER:
        return (
          <div>
            <h1>Search for a Github user</h1>
            <input
              value={usernameInput}
              onChange={event => props.inputChanged(event, USER)}/>
              {!usernameInput
                ? null
                : <button onClick={() => props.searchUsername(usernameInput)}>
                   Search
                  </button>}
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
                onChange={event => props.inputChanged(event, REPO)}/>
            </div>
            <div>
              <label>Username (optional)</label>
              <input
                value={usernameInput}
                onChange={event => props.inputChanged(event, USER)}/>
            </div>
            {!!repoInput
              ? <button onClick={() => props.searchRepo(repoInput, usernameInput)}>
                  Search
                </button>
              : <div> </div>}
          </div>
        );
      default:
        return (
          <div>
            <h2>What would you like to search for?</h2>
            <button onClick={() => props.changeSearchType(USER)}>GitHub User</button>
            <button onClick={() => props.changeSearchType(REPO)}>GitHub Repository</button>
          </div>
        );
    }
};

const mapStateToProps = ({ usernameInput, repoInput }) =>
  ({ usernameInput, repoInput });

const mapDispatchToProps = dispatch => ({
  searchUsername: username => findGithubUser(username)(dispatch),
  searchRepo: (repoName, username) =>
    findGithubRepo(repoName, username)(dispatch),
  changeSearchType: type => dispatch(setSearchType(type)),
  inputChanged: (event, type) => dispatch(setInputValue(event, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
