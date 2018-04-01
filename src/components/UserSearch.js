import SearchType from './SearchTypeHelper'
import React  from 'react'
import MandatoryFieldSearchButton from './MandatoryFieldSearchButton'

const UserSearch = ({ usernameInput, ...props }) =>
  <div>
    <h1>Search for a Github user</h1>
    <form onSubmit={event => props.searchUsername(event, usernameInput)}>
      <input
        value={usernameInput}
        onChange={({ target }) => props.handleInputChange(target, SearchType.USER)}/>
      <MandatoryFieldSearchButton field={usernameInput}/>
    </form>
  </div>

export default UserSearch