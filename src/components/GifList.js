import React from 'react'

const GifList = props => {
  return props.gifs.map( gif => 
    <li key={gif.url}><img src={gif.url} alt={gif.title} /></li>
  )
}

export default GifList