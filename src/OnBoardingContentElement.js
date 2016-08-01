import React, {Component, PropTypes} from 'react'

class OnBoardingContentElement extends Component{
  constructor(props){
    super(props)


  }

  render(){
    const {renderMenu} = this.props
    var contentData = [];
    for(var i =0; i< 6; i++){
      contentData.push(renderMenu);
    }
    console.log(contentData, this.props);
    return(
        <div>
        <div className="ui four column centered grid">
          {contentData}
          <div className='ui centered column'>Title for topic1</div>
          <div className='ui centered column'>Title for topic1</div>
          <div className='ui centered column'>Title for topic1</div>
          <div className='ui centered column'>Title for topic1</div>
        </div>
      </div>
    )
  }
}

export default OnBoardingContentElement
