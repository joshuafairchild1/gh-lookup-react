import React, { Component } from 'react';
import './App.css';

class Results extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
      </div>
    );
  }
}

export default Results;
