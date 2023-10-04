import styled from '@emotion/styled';
const Ul = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-around;

  list-style: none;
  padding-inline-start: 0;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: auto;
  padding: 7px;
  font-weight: inherit;

  border: none;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
  &: hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -5px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transform: scale(1.05);
  }
`;
export { Ul, Button };
