import React from 'react';
import { styled } from '../../theme';

interface IButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.blue};
  background-color: transparent;
  padding: ${(props) => props.theme.metrics.metricS};
  width: 300px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;

const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
