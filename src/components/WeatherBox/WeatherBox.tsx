import React from 'react';
import styled from 'styled-components';
import { getTime } from '../../utils/groupData';

interface IWeatherBoxProps {
  mainInfo: any;
  time: string;
  icon: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.metrics.metricS};
`;

const StyledValue = styled.div`
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  margin-bottom: ${(props) => props.theme.metrics.metricXS};
`;

const WeatherBox: React.FC<IWeatherBoxProps> = ({ time, mainInfo, icon }) => {
  return (
    <StyledWrapper>
      <StyledValue>{getTime(time)}</StyledValue>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      <StyledValue>{Math.round(mainInfo.temp)} &#186;C</StyledValue>
      <StyledValue>Wilgotność: {mainInfo.humidity}%</StyledValue>
    </StyledWrapper>
  );
};

export default WeatherBox;
