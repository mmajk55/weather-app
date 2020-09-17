import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  blue: '#158ca1',
  white: '#fff',
  black: '#000',
  grey: '#f3f4f8',
};

const metrics = {
  metricXL: '90px',
  metricL: '60px',
  metricM: '45px',
  metricBase: '30px',
  metricS: '15px',
  metricXS: '5px',
};

const shadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';

const containerWidth = '1300px';

export const theme = {
  colors,
  containerWidth,
  metrics,
  shadow,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
