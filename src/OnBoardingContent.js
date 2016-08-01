import React, {Component, PropTypes} from 'react'
import OnBoardingContentElement from './OnBoardingContentElement'

class OnBoardingContent extends Component{
  constructor(props){
    super(props)
  }

  static propTypes  = {
    items:PropTypes.array,
    children:PropTypes.element,
    filter:PropTypes.func,
    limit:PropTypes.number,
    renderMenu:PropTypes.element
  }
  render(){
    const {data} = this.props
    const element = "<div className='ui centered column'>Title for topic1</div>";
    return(
      <div className="content">
          <OnBoardingContentElement renderMenu = {element}></OnBoardingContentElement>
      </div>
    )
  }
}

export default OnBoardingContent
