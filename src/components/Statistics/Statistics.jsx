import { Li } from './Statistics.styled';

export const Statistics = ({ options, totalFeedback, positivePercentage }) => {
  return (
    <ul>
      {Object.keys(options).map((el, idx) => {
        return (
          <Li key={idx}>
            {el}:{options[el]}
          </Li>
        );
      })}
      <Li>Total feedback: {totalFeedback}</Li>
      <Li>Positive feedback: {positivePercentage}</Li>
    </ul>
  );
};
