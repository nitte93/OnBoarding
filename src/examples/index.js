import React, { Component } from 'react'
import { render } from 'react-dom'

import OnBoarding from '../OnBoarding'

class App extends Component {
  render() {
    return (
      <div>
        <OnBoarding />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
