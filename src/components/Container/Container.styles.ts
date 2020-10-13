import { styled } from '../../theme';

export const StyledContainer = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.metrics.metricBase};
  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    padding: 0 ${(props) => props.theme.metrics.metricL};
  }
  @media (min-width: ${(props) => props.theme.breakPoints.smallDesktop}) {
    padding: 0 ${(props) => props.theme.metrics.metricXL};
  }
`;