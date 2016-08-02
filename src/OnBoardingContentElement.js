import React, {Component, PropTypes} from 'react'

class OnBoardingContentElement extends Component{
  constructor(props){
    super(props)


  }

  render(){
    const {renderMenu} = this.props
    var contentData = [];
    renderMenu.forEach(function(item, index, array){
      console.log(item);
      item.data.forEach(function(item1, index, array){
          console.log(item.renderComponent);
          contentData.push(<item.renderComponent key={index} {...item1}/>);
      })
    });
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
