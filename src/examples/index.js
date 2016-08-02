import React, { Component } from 'react'
import { render } from 'react-dom'

import OnBoarding from '../OnBoarding'
import contentComponent from './contentComponent'

var contentData = [
  {
    data:[{
      contentChildName:"page1",
      followers:741
    },
    {
      contentChildName:"page2",
      followers:742
    },
    {
      contentChildName:"page3",
      followers:743
    },
    {
      contentChildName:"page4",
      followers:744
    },
    {
      contentChildName:"page5",
      followers:745
    }],
    renderComponent:contentComponent
  }
];

const content = {
  title:'SomeTitle',
  subtitle:'Some Subtitle',
  content:contentData
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
