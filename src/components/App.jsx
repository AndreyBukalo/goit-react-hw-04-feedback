import React, { Component } from 'react';
import { Box } from './Box';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Nonification';



export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


onFeedClick = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  }

  countTotalFeedback = () => { 
    const totalFeeds = this.state.good + this.state.bad + this.state.neutral;
    return totalFeeds;
    
    };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedsPercent = this.state.good / this.countTotalFeedback() * 100;
    return Math.round(positiveFeedsPercent);
    };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Box width={320}
        display="flex"
        flexDirection="column"
        alignItems="flextStart"
        listStyle="none"
        mr="20"
        mt="20px"
        p="0">
      <Section Section title='Please leave feedback'>
         <FeedbackOptions options={ Object.keys(this.state)} onFeedClick={this.onFeedClick}></FeedbackOptions>
  </Section >
        <Section Section title='Statistics'>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}></Statistics>) : (
            <Notification message='No feedback ' />)}
         </Section >
</Box>
 
    );
    
  }
}


