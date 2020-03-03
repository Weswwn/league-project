import React from 'react';
import Form from './components/Form'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='container'>
          <Form />
        </div>
      </div>
    )
  }
}

export default App;