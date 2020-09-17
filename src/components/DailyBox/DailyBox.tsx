import React from 'react';
import { styled } from '../../theme';
import { getMax, getMin, getMean } from '../../utils/groupData';
import Moment from 'react-moment';
import 'moment/locale/pl';
import WeatherBox from '../WeatherBox/WeatherBox';

interface IDailyBoxProps {
  data: any;
  day: string;
}

const StyledDailyBox = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 10px;
  width: 100%;
  margin-bottom: ${(props) => props.theme.metrics.metricM};
`;

const StyledDate = styled.span`
  font-style: italic;
  display: block;
`;

const StyledWeatherBoxWrapper = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
`;

const StyledStats = styled.div`
  display: flex;
  align-items: center;
`;

const StyledValue = styled.div`
  color: ${(props) => props.theme.colors.blue};
  text-align: center;
  margin-left: ${(props) => props.theme.metrics.metricS};
`;

const DailyBox: React.FC<IDailyBoxProps> = ({ data, day }) => (
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

export default DailyBox;
