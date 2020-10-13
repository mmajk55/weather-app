import React, { useMemo } from 'react';
import Moment from 'react-moment';
import WeatherBox from '../WeatherBox/WeatherBox';
import { StyledDailyBox, StyledDate, StyledStats, StyledWeatherBoxWrapper } from './DailyBox.styles';
import { getStats } from '../../utils/groupData';
import { StyledValue } from '../WeatherBox/WeatherBox.styles';
import { DailyBoxProps } from './DailyBox.types';
import 'moment/locale/pl';

const DailyBoxComponent: React.FC<DailyBoxProps> = ({ data, day }) => {
  const { min, max, mean } = useMemo(() => getStats(data.map((temp) => temp.main.temp)), [data]);

  return (
    <StyledDailyBox>
      <StyledStats>
        <h3>
          <Moment locale="pl" format="dddd" date={day} />
          <StyledDate>{day}</StyledDate>
        </h3>
        <StyledValue>Min: {min}&#186;C</StyledValue>
        <StyledValue>Max: {max}&#186;C</StyledValue>
        <StyledValue>Śr: {mean}&#186;C</StyledValue>
      </StyledStats>
      <StyledWeatherBoxWrapper>
        {data.map((info, i) => (
          <WeatherBox key={i} icon={info.weather[0].icon} mainInfo={info.main} time={info.dt_txt} />
        ))}
      </StyledWeatherBoxWrapper>
    </StyledDailyBox>
  );
};

export default React.memo(DailyBoxComponent);
