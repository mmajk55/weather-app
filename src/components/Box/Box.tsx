import React from 'react';
import { styled } from '../../theme';

interface IBoxProps {
  children: React.ReactNode;
  boxWidth?: string | undefined;
}

const StyledBox = styled.div<{ boxWidth: string | undefined }>`
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 10px;
  width: ${(props) => props.boxWidth};
`;

const Box: React.FC<IBoxProps> = ({ children, boxWidth }) => <StyledBox boxWidth={boxWidth}>{children}</StyledBox>;

export default Box;
