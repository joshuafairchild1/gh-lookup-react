import React  from 'react'
import './App.css'
import ChangeSearchContainer from '../containers/ChangeSearchContainer'
import SearchContainer from '../containers/SearchContainer'
import ResultsContainer from '../containers/ResultsContainer'

const App = () =>
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Look! A Title!</h1>
    </header>
    <ChangeSearchContainer/>
    <SearchContainer/>
    <ResultsContainer/>
  </div>

export default App