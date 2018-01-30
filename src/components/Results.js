import React from 'react'

const Results = ({ currentSearch }) =>
  <div>
    <pre>{currentSearch ? JSON.stringify(currentSearch, null, 2) : ''}</pre>
  </div>

export default Results