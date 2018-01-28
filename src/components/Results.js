import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <div>
        <pre>{this.props.data ? JSON.stringify(this.props.data, null, 2) : ''}</pre>
      </div>
    );
  }
}

export default Results;
