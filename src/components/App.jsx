import { useState } from 'react';
import { Box } from './Box';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Nonification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const onFeedClick = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const totalFeeds = Object.values(feedback).reduce(
      (acc, feed) => acc + feed,
      0
    );
    return totalFeeds;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedsPercent = (feedback.good / countTotalFeedback()) * 100;
    return Math.round(positiveFeedsPercent);
  };

  return (
    <Box
      width={320}
      display="flex"
      flexDirection="column"
      alignItems="flextStart"
      listStyle="none"
      mr="20"
      mt="20px"
      p="0"
    >
      <Section Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onFeedClick={onFeedClick}
        ></FeedbackOptions>
      </Section>
      <Section Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          ></Statistics>
        ) : (
          <Notification message="No feedback " />
        )}
      </Section>
    </Box>
  );
};
