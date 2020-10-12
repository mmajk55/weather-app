import React from 'react';
import Moment from 'react-moment';
import { StyledValue, StyledWrapper } from './WeatherBox.styles';
import 'moment/locale/pl';

interface IWeatherBoxProps {
  mainInfo: any;
  time: string;
  icon: string;
}

const WeatherBox: React.FC<IWeatherBoxProps> = ({ time, mainInfo, icon }) => {
  return (
    <StyledWrapper>
      <StyledValue>
        <Moment locale="pl" format="LT" date={time} />
      </StyledValue>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      <StyledValue>{Math.round(mainInfo.temp)} &#186;C</StyledValue>
      <StyledValue>Wilgotność: {mainInfo.humidity}%</StyledValue>
    </StyledWrapper>
  );
};

export default WeatherBox;
