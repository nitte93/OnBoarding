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
    const {content} = this.props
    console.log(content);
    return(
      <div className="content">
          <OnBoardingContentElement renderMenu = {content}></OnBoardingContentElement>
      </div>
    )
  }
}

export default OnBoardingContent
