import React from 'react';
import { connect } from 'react-redux';

const Results = ({ currentSearch }) =>
  <div>
    <pre>{currentSearch ? JSON.stringify(currentSearch, null, 2) : ''}</pre>
  </div>;

const mapStateToProps = ({ currentSearch }) => ({ currentSearch });

export default connect(mapStateToProps)(Results)
