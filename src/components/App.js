import React from 'react'
import '../style.css'

import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'


const App = () => {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App
