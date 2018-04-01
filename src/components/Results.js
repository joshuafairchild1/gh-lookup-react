import React from 'react'

const Results = ({ currentSearch, searchException }) =>
  <div>
    <pre>{currentSearch
      ? JSON.stringify(currentSearch, null, 2)
      : searchException
       ? searchException.message
       : ''}</pre>
  </div>

export default Results