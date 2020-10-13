import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => <StyledButton onClick={onClick}>{text}</StyledButton>;

export default React.memo(Button);
