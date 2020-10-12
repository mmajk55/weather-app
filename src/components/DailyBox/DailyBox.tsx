import React from 'react';
import Moment from 'react-moment';
import WeatherBox from '../WeatherBox/WeatherBox';
import { StyledDailyBox, StyledDate, StyledStats, StyledWeatherBoxWrapper } from './DailyBox.styles';
import { getMax, getMin, getMean } from '../../utils/groupData';
import { StyledValue } from '../WeatherBox/WeatherBox.styles';
import 'moment/locale/pl';

interface IDailyBoxProps {
  data: any;
  day: string;
}

const DailyBox: React.FC<IDailyBoxProps> = ({ data, day }) => {
  console.log(data);
  return (
    <StyledDailyBox>
      <StyledStats>
        <h3>
          <Moment locale="pl" format="dddd" date={day} />
          <StyledDate>{day}</StyledDate>
        </h3>
        <StyledValue>Min: {getMin(data)}&#186;C</StyledValue>
        <StyledValue>Max: {getMax(data)}&#186;C</StyledValue>
        <StyledValue>Śr: {getMean(data.map((temp) => temp.main.temp))} &#186;C</StyledValue>
      </StyledStats>
      <StyledWeatherBoxWrapper>
        {data.map((info, i) => (
          <WeatherBox key={i} icon={info.weather[0].icon} mainInfo={info.main} time={info.dt_txt} />
        ))}
      </StyledWeatherBoxWrapper>
    </StyledDailyBox>
  );
};

export default DailyBox;
