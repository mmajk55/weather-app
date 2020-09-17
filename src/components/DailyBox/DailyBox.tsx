import React from 'react';
import { styled } from '../../theme';
// import Video from '../../assets/Blue_Sky_and_Clouds_Timelapse_0892__Videvo.mov';
import { getDayName } from '../../utils/groupData';
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

// const StyledVideo = styled.video`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   object-fit: cover;
//   z-index: -1;
//   opacity: 0.5;
// `;

const StyledDate = styled.span`
  margin-left: ${(props) => props.theme.metrics.metricS};
  font-style: italic;
`;

const StyledWeatherBoxWrapper = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
`;

const DailyBox: React.FC<IDailyBoxProps> = ({ data, day }) => {
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <StyledDailyBox>
      <h3>
        {getDayName(day).toUpperCase()}
        <StyledDate>{day}</StyledDate>
      </h3>

      <StyledWeatherBoxWrapper>
        {data.map((info, i) => (
          <WeatherBox key={i} icon={info.weather[0].icon} mainInfo={info.main} time={info.dt_txt} />
        ))}
      </StyledWeatherBoxWrapper>
    </StyledDailyBox>
  );
};

export default DailyBox;
