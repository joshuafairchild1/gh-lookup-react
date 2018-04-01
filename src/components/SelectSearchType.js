import React  from 'react'
import SearchType from './SearchTypeHelper'

const SelectSearchType = props =>
  <div>
    <h2>What would you like to search for?</h2>
    <button onClick={() => props.changeSearchType(SearchType.USER)}>
      GitHub User
    </button>
    <button onClick={() => props.changeSearchType(SearchType.REPO)}>
      GitHub Repository
    </button>
  </div>


export default SelectSearchType