import React, { Component } from 'react';
import Buttons from 'components/Controls/Controls';

class Feedback extends Component {

  static propTypes = {
    //
  };

  state = {
  good:0,
  neutral: 0,
  bad: 0
}

   onGoodClick = () => {
    this.setState(prevState => ({
     good: prevState.good + 1,
    }));
  };

    onNeutralClick = () => {
    this.setState(prevState => ({
     neutral: prevState.neutral + 1,
    }));
    };
    
      onBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => { 
    const totalFeeds = this.state.good + this.state.bad + this.state.neutral;
    return totalFeeds;
    
    };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedsPercent = this.state.good / this.countTotalFeedback() * 100;
  
    if (isNaN(positiveFeedsPercent) ) {
     return positiveFeedsPercent = 0;
    }
     return Math.round(positiveFeedsPercent);
    };

  render() {
      const { good } = this.state;
      const { neutral } = this.state;
       const {bad } = this.state;

    return (
      <div>
        <Buttons onGood={this.onGoodClick}
              onNetural={this.onNeutralClick}
            onBad={this.onBadClick}
       />
         {/* <button type="button" onClick={this.onGoodClick} >Good</button>
            <button type="button" onClick={this.onNeutralClick} >Netural</button>
             <button type="button" onClick={this.onBadClick} >Bad</button></div> */}
          <h2>Statistics</h2>
            <span >{good}</span>
            <span >{neutral}</span>
             <span >{bad}</span>
        <span>Positve feedback:{this.countPositiveFeedbackPercentage()}%</span>
    
        <span>Total:{ this.countTotalFeedback()}</span>
         
    </div>
    );
    
  }
}

export default Feedback;