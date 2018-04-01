import React  from 'react'
import MandatoryFieldSearchButton from './MandatoryFieldSearchButton'
import SearchType from './SearchTypeHelper'

const RepoSearch = ({ usernameInput, repoInput, ...props }) =>
  <div>
    <h1>Search for a Github repository</h1>
    <form onSubmit={event => props.searchRepo(event, repoInput, usernameInput)}>
      <div>
        <label>Repository name (required)</label>
        <input
          value={repoInput}
          onChange={({ target }) => props.handleInputChange(target, SearchType.REPO)}/>
      </div>
      <div>
        <label>Username (optional)</label>
        <input
          value={usernameInput}
          onChange={({ target }) => props.handleInputChange(target, SearchType.USER)}/>
      </div>
      <MandatoryFieldSearchButton field={repoInput}/>
    </form>
  </div>

export default RepoSearch