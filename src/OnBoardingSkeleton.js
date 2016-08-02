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
require('../semantic-ui/dist/semantic.min.css');
require('../semantic-ui/dist/semantic.min.js');


class OnBoardingSkeleton extends Component {
  constructor(props){
    super(props);

    this.openModal = this.openModal.bind(this);
  }
  static propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
    children:PropTypes.element,
    limit:PropTypes.number,
    next:PropTypes.func,
    pre:PropTypes.func,
    content:PropTypes.array,
  };

  static defaultProps = {
    title: 'Onboarding title',
    subtitle:'Onboarding subtitle',
    next:() => console.log('next'),
    pre:() => console.log('pre'),

  }

  openModal(){
    $('.ui.modal.newOnboarding')
      .modal({
        selector:{
          close:'icon.close'
        }
      })
      .modal('show');
  }


  render(){
    const {children, title, subtitle, filter, limit, content, displayContent} = this.props
    return(
      <div>
        <div className="ui main containers">
         <div onClick={this.openModal}>Open Modal</div>
         <div className="ui modal newOnboarding">

                <i className="close icon"></i>
                <OnBoardingHeader title={title} subTitle={subtitle}></OnBoardingHeader>

                <OnBoardingContent content = {content} displayContent={displayContent} ></OnBoardingContent>
                <div className="actions">
                    <div className="ui  left labeled icon button" onClick={this.props.pre}>
                      Pre
                      <i className="left arrow icon"></i>
                    </div>
                    <div className="ui  right labeled icon button" onClick={this.props.next}>
                      Next
                      <i className="right arrow icon"></i>
                    </div>
                </div>

          </div>
      </div>


    </div>
    )
  }
}
export default OnBoardingSkeleton
