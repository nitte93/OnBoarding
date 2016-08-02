import React, {Component, PropTypes} from 'react'

class OnBoardingContentElement extends Component{
  constructor(props){
    super(props)


  }

  render(){
    const {renderMenu, displayContent} = this.props
    var contentData = [];
    // renderMenu.forEach(function(item, index, array){
    //   item.data.forEach(function(item1, index1, array){
    //       contentData.push(<item.renderComponent  {...item1}/>);
    //   })
    // });
    displayContent.data.forEach(function(item, index, array){
      contentData.push(<displayContent.renderComponent  {...item}/>);
    })
    return(
        <div>
        <div className="ui four column centered grid">
          {contentData}
        </div>
      </div>
    )
  }
}

export default OnBoardingContentElement
