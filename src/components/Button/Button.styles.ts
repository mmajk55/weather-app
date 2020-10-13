import { styled } from '../../theme';

export const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.blue};
  background-color: transparent;
  padding: ${(props) => props.theme.metrics.metricS};
  width: 300px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
