import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      searchBar: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchBar: e.target.value
    })
  }

  handleSubmit(e) {
    console.log('hi');
    e.preventDefault()

  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <Form />
        </div>
      </div>
    )
  }
}

export default App;