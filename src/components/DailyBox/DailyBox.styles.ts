import { styled } from '../../theme';

export const StyledDailyBox = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 10px;
  width: 100%;
  margin-bottom: ${(props) => props.theme.metrics.metricM};
`;

export const StyledDate = styled.span`
  font-style: italic;
  display: block;
`;

export const StyledWeatherBoxWrapper = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
`;

export const StyledStats = styled.div`
  display: flex;
  align-items: center;
`;