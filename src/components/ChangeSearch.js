import React from 'react'
import SearchType from './SearchTypeHelper'

const { USER, REPO } = SearchType

const ChangeSearch = ({ searchType, ...props }) =>
  searchType === SearchType.NONE ||
    <div>
      <button onClick={() =>
        props.handleClick(searchType === REPO ? USER : REPO)}>
        Search GitHub {searchType === REPO ? 'Users' : 'Repositories'}
      </button>
    </div>

export default ChangeSearch