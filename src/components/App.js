import React  from 'react';
import './App.css';
import ChangeSearch from "./ChangeSearch";
import Search from "./Search";
import Results from "./Results";

const App = () =>
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Look! A Title!</h1>
    </header>
    <ChangeSearch/>
    <Search/>
    <Results/>
  </div>;

export default App;