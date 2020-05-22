import React, { Component } from 'react'

export default  class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSearch(this.state.query)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='form'>
        <p>Enter a Search Term:</p>
        <input 
        type='text' 
        onChange={this.handleInputChange}
        value={this.state.query}
        />
        <button>Find Gifs</button>
      </form>
    )
  }

}