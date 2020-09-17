import React from 'react';
import { styled } from '../../theme';

const StyledWrapper = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: ${(props) => props.theme.metrics.metricS};
`;

const StyledInputSearch = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  outline: none;
  padding: ${(props) => props.theme.metrics.metricXS} 0;
`;

const InputSearch: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledInputSearch type="text" placeholder="Wpisz nazwę miasta" />
    </StyledWrapper>
  );
};

export default InputSearch;
