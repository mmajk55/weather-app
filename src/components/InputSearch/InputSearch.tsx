import React from 'react';
import { StyledWrapper, StyledInputSearch } from './InputSearch.styles';
import { InputSearchProps } from './InputSearch.types';

const InputSearch: React.FC<InputSearchProps> = ({ onChange, onKeyPress }) => (
  <StyledWrapper>
    <StyledInputSearch onKeyDown={onKeyPress} onChange={onChange} type="text" placeholder="Wpisz nazwę miasta" />
  </StyledWrapper>
);

export default React.memo(InputSearch);
