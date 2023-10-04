import React from 'react';
import { Button, Ul } from './FeedbackOptions.styled';
export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Ul>
      {Object.keys(options).map((el, idx) => {
        return (
          <Button key={idx} onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        );
      })}
    </Ul>
  );
};
