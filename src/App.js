import React from 'react'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Cocktail from './components/cocktails/Cocktail'

const App = () => {
  return (
    <div>
        <Header/>
        <Search/>
        <Cocktail/>
    </div>
  )
}

export default App