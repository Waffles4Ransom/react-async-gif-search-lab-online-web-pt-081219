import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  handleSearch = async(query) => {
    try {
      const API_KEY = 'sNENZuXNt19Id8VxvKW4SC7C1PPsH4zx'
      const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&offset=0&rating=G&lang=en`
      const res = await fetch(URL)
      if (!res.ok) throw res
      const data = await res.json()
      const gifData = data.data.map(g => ({ url: g.images.original.url, title: g.title}))
      this.setState({
        gifs: gifData
      })
    } 
    catch(error) {
      alert("error!")
    }
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <ul>
          <GifList gifs={this.state.gifs} />
        </ul>
      </div>
    )
  }
}