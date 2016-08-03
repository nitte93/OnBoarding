import React, { Component } from 'react'
import { render } from 'react-dom'

import OnBoarding from '../OnBoarding'
import contentComponent from './contentComponent'
import contentComponent1 from './contentComponent1'
import contentComponent2 from './contentComponent2'

import data from './rawData.json'

var contentData = data.content;
contentData[0].renderComponent = contentComponent
contentData[1].renderComponent = contentComponent1
contentData[2].renderComponent = contentComponent2

const content = {
  title:'SomeTitle',
  subtitle:'Some Subtitle',
  content:contentData,
  limit:3,
  display:'modal'
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
