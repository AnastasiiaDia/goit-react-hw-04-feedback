import { FeedBackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';
import { Container } from './Feedback.styled';
export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  onTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  positivePercentage = () => {
    const totalFeedback = this.onTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    const totalFeedback = this.onTotalFeedback();
    return (
      <Container>
        <Section title={`Please leave feedback`}>
          <FeedBackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {totalFeedback === 0 ? (
          <Notification message={`No feedback given`} />
        ) : (
          <Section title={`Statistics`}>
            <Statistics
              options={this.state}
              totalFeedback={this.onTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
