import React, {Component, PropTypes} from 'react';
import {
  Segment,
  Grid,
  Column,
  Row,
  Divider,
  Button
} from "react-semantify"
import OnBoardingHeader from './onboardingHeader';
import OnBoardingContent from './OnBoardingContent';
import OnBoardingSkeleton from './OnBoardingSkeleton';
require('../semantic-ui/dist/semantic.min.css');
require('../semantic-ui/dist/semantic.min.js');

var OnBoarding  = ComposedComponent => class extends Component{
  constructor(props){
    super(props)

    this.state = {
      index:this.props.index || 0,
      displayContent:this.props.content[0]
    }
    this.showNext = this.showNext.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
    this.initialContent = this.initialContent.bind(this);
  }

  componentDidMount(){
    var displayContent;
  }
  showNext(){
    const tempIndex = this.state.index + 1;
    this.setState({index:tempIndex, displayContent:this.props.content[tempIndex]});
  }
  showPrevious(){
    const tempIndex = this.state.index? this.state.index - 1 : 0;
    this.setState({index:tempIndex, displayContent:this.props.content[tempIndex]});
  }
  initialContent(...args){
    // console.log(arguments[0][arguments[1]]);
    this.setState({displayContent:arguments[0][arguments[1]]});
  }
  render(){
    const {title, subtitle, content, limit, index = 0} = this.props
    return(
      <ComposedComponent  {...this.props} displayContent = {this.state.displayContent} next={this.showNext} pre={this.showPrevious} />
    )
  }
}

export default OnBoarding(OnBoardingSkeleton)
