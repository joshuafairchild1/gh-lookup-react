import React  from 'react'

/**
 * Conditionally render a submit button depending on the value
 * of a mandatory field
 */
const MandatoryFieldSearchButton = ({ field }) =>
  !field || <button type="submit">Search</button>

export default MandatoryFieldSearchButton
