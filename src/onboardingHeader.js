import React, {Component, PropTypes} from 'react';


 class OnBoardingHeader extends Component{
   constructor(props){
     super(props)
   }

   static propTypes:{
     title:PropTypes.string,
     subTitle:PropTypes.string,
   }

   static defaultProps = {
     title: 'Onboarding title',
     subtitle:'Onboarding subtitle',
   }

   render(){
     const {title, subTitle}  = this.props

     return(
       <h3 className="ui center aligned header">
         {this.props.title}
         <div className="sub header">{this.props.subTitle}</div>
       </h3>

     )
   }
 }

 export default OnBoardingHeader
