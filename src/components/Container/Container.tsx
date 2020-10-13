import React from 'react';
import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default React.memo(Container);
