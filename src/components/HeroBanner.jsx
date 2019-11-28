import React from 'react';
import styled from 'react-emotion';
import video from '../pages/hero_video.mp4';

const HeroBannerSpace = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: ${props => props.theme.homepagetiles.ratio};
  }

  width: 100%;
  margin: auto;
  padding-top: 24px;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
  
  will-change: transform;
  transition: transform 160ms;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const FlexBoxVertCenter = styled.div`
  position: absolute;
  width: 38.2%;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  z-index: 1;
`;

const FullVideo = styled.video`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const CenteredHeader = styled.h1`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 33%;
`;

const HeroBanner = () => (
  <HeroBannerSpace>
    <Content>
      <FullVideo autoPlay loop muted playsInline>
        <source src={video} />
      </FullVideo>
    </Content>
  </HeroBannerSpace>
);

export default HeroBanner;
