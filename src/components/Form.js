import React, { Component } from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBar: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchBar: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get('/api/getAccount', {
      params: {
        name: this.state.searchBar
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log('Axios account search error');
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for your account!
          <input type='text' onChange={this.handleChange} />
        </label>
        <input type='submit' />
      </form>
    )
  }
}

export default Form;