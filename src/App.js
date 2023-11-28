import React, { useState } from 'react'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Cocktail from './components/cocktails/Cocktail'

const App = () => {
     const [search, setSearch]=useState("")
     const handleChange=(e)=>{
        setSearch(e.target.value)
     }
  return (
    <div>
        <Header/>
        <Search search={search} handleChange={handleChange}/>
        <Cocktail/>
    </div>
  )
}

export default App