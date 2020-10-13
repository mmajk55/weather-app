import React, { useMemo } from 'react';
import Moment from 'react-moment';
import { StyledValue, StyledWrapper } from './WeatherBox.styles';
import { WeatherBoxProps } from './WeatherBox.types';
import 'moment/locale/pl';

const WeatherBox: React.FC<WeatherBoxProps> = ({ time, mainInfo, icon }) => {
  const temp = useMemo(() => Math.round(mainInfo.temp), [mainInfo.temp]);
  return (
    <StyledWrapper>
      <StyledValue>
        <Moment locale="pl" format="LT" date={time} />
      </StyledValue>
      <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      <StyledValue>{temp} &#186;C</StyledValue>
      <StyledValue>Wilgotność: {mainInfo.humidity}%</StyledValue>
    </StyledWrapper>
  );
};

export default WeatherBox;
