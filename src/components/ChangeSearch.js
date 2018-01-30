import React from 'react'
import SearchType from '../imports/SearchType'

const { USER, REPO } = SearchType

const ChangeSearch = ({ searchType, ...props }) =>
  !searchType ? null :
    <div>
      <button onClick={() =>
        props.changeSearch(searchType === REPO ? USER : REPO)}>
        Search GitHub {searchType === REPO ? 'Users' : 'Repositories'}
      </button>
    </div>

export default ChangeSearch