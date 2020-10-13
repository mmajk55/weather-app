import React from 'react';
import { StyledWrapper, StyledInputSearch } from './InputSearch.styles';
import { InputSearchProps } from './InputSearch.types';

const InputSearch: React.FC<InputSearchProps> = ({ onChange }) => (
  <StyledWrapper>
    <StyledInputSearch onChange={onChange} type="text" placeholder="Wpisz nazwę miasta" />
  </StyledWrapper>
);

export default React.memo(InputSearch);
