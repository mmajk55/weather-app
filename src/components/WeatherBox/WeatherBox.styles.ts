import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.metrics.metricS};
`;

export const StyledValue = styled.div`
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  margin-bottom: ${(props) => props.theme.metrics.metricXS};
  padding: 0 ${(props) => props.theme.metrics.metricXS};

  &:first-of-type {
    margin-left: ${(props) => props.theme.metrics.metricS};
  }
`;
