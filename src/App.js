import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Look! A Title!</h1>
        </header>
        <SearchContainer/>
      </div>
    );
  }
}

export default App;
