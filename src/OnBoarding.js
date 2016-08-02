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


class OnBoarding extends Component {
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
      .modal('show')
    ;
  }


  render(){
    const {children, title, subtitle, filter, limit, content} = this.props
    console.log(content);
    return(
      <div>
        <div className="ui main containers">
         <div onClick={this.openModal}>Open Modal</div>
         <div className="ui modal newOnboarding">

                <i className="close icon"></i>
                <OnBoardingHeader title={title} subTitle={subtitle}></OnBoardingHeader>

                <OnBoardingContent content = {content}></OnBoardingContent>
                <div className="actions">
                    <div className="ui positive left labeled icon button">
                      Pre
                      <i className="left arrow icon"></i>
                    </div>
                    <div className="ui positive right labeled icon button">
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
export default OnBoarding
