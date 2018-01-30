import React  from 'react'
import SearchType from '../imports/SearchType'

const { USER, REPO } = SearchType

const Search = ({ usernameInput, repoInput, searchType, ...props }) => {
    switch (searchType) {
      case USER:
        return (
          <div>
            <h1>Search for a Github user</h1>
            <input
              value={usernameInput}
              onChange={({ target }) => props.inputChanged(target, USER)}/>
              {!usernameInput
                ? null
                : <button onClick={() => props.searchUsername(usernameInput)}>
                   Search
                  </button>}
          </div>
        )
      case REPO:
        return (
          <div>
            <h1>Search for a Github repository</h1>
            <div>
              <label>Repository name (required)</label>
              <input
                value={repoInput}
                onChange={({ target }) => props.inputChanged(target, REPO)}/>
            </div>
            <div>
              <label>Username (optional)</label>
              <input
                value={usernameInput}
                onChange={({ target }) => props.inputChanged(target, USER)}/>
            </div>
            {!!repoInput
              ? <button onClick={() => props.searchRepo(repoInput, usernameInput)}>
                  Search
                </button>
              : <div> </div>}
          </div>
        )
      default:
        return (
          <div>
            <h2>What would you like to search for?</h2>
            <button onClick={() => props.changeSearchType(USER)}>GitHub User</button>
            <button onClick={() => props.changeSearchType(REPO)}>GitHub Repository</button>
          </div>
        )
    }
}

export default Search