import styled from 'styled-components';

export const StyledWeatherForecast = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: ${(props) => props.theme.metrics.metricXL} 0;
`;

export const StyledSearchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.metrics.metricM};
`;

export const StyledHeader = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  margin-bottom: ${(props) => props.theme.metrics.metricL};
`;
