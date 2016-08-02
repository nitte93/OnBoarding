import React, { Component } from 'react'
import { render } from 'react-dom'

import OnBoarding from '../OnBoarding'
import contentComponent from './contentComponent'
import contentComponent1 from './contentComponent1'

import data from './rawData.json'

var contentData = data.content;
contentData[0].renderComponent = contentComponent
contentData[1].renderComponent = contentComponent1

const content = {
  title:'SomeTitle',
  subtitle:'Some Subtitle',
  content:contentData,
  limit:3,
};
class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <OnBoarding    {...content}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
