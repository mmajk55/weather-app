import { styled } from '../../theme';

export const StyledWrapper = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: ${(props) => props.theme.metrics.metricS};
`;

export const StyledInputSearch = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  outline: none;
  padding: ${(props) => props.theme.metrics.metricXS} 0;
`;