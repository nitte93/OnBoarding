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
    const {content, displayContent} = this.props
    return(
      <div className="content">
          <OnBoardingContentElement renderMenu = {content} displayContent={displayContent}></OnBoardingContentElement>
      </div>
    )
  }
}

export default OnBoardingContent
