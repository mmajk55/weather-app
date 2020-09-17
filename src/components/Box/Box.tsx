import React from 'react';
import { styled } from '../../theme';
import Video from '../../assets/Blue_Sky_and_Clouds_Timelapse_0892__Videvo.mov';

interface IBoxProps {
  children: React.ReactNode;
}

const StyledBox = styled.div``;

const StyledBoxWrapper = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  opacity: 0.5;
`;

const Box: React.FC<IBoxProps> = ({ children }) => (
  <StyledBoxWrapper>
    <StyledVideo autoPlay loop muted src={Video}></StyledVideo>
    <StyledBox>{children}</StyledBox>
  </StyledBoxWrapper>
);

export default Box;
