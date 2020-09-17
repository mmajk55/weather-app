import React from 'react';
import { styled } from '../../theme';

interface IContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.metrics.metricBase};
  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    padding: 0 ${(props) => props.theme.metrics.metricL};
  }
  @media (min-width: ${(props) => props.theme.breakPoints.smallDesktop}) {
    padding: 0 ${(props) => props.theme.metrics.metricXL};
  }
`;

const Container: React.FC<IContainerProps> = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
