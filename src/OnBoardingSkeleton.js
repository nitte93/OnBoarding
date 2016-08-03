import React, {Component, PropTypes} from 'react';
import {
  Segment,
  Grid,
  Column,
  Row,
  Divider,
  Button
} from "react-semantify"
import OnBoardingModal from './OnBoardingModal';
import OnBoardingPage from './OnBoardingPage';
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
          close:'.close'
        }
      })
      .modal('show');
  }


  render(){
    const{display='modal'} = this.props
    return(
      <div>
        <div className="ui main containers">
        {display==="page"?<OnBoardingPage {...this.props}/>:<OnBoardingModal {...this.props}/>}
        </div>
    </div>
    )
  }
}
export default OnBoardingSkeleton
