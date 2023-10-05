import { FeedBackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component, useState } from 'react';
import { Container } from './Feedback.styled';
export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };

  const onTotalFeedback = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    const totalFeedback = onTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };
  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const totalFeedback = onTotalFeedback();
  return (
    <Container>
      <Section title={`Please leave feedback`}>
        <FeedBackOptions options={feedback} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {totalFeedback === 0 ? (
        <Notification message={`No feedback given`} />
      ) : (
        <Section title={`Statistics`}>
          <Statistics
            options={feedback}
            totalFeedback={onTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      )}
    </Container>
  );
}
