import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const FullsizeDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const DuotoneShadow = styled(FullsizeDiv)`
  background-color: ${props => props.shadowColor};
`;

// Gradient Generator
const FallbackGradient = styled(FullsizeDiv)`
  background: linear-gradient(0deg, ${props => props.shadowColor} 0%, ${props => props.highlightColor} 100%);
`;

const DuotoneHighlight = styled(FullsizeDiv)`
  background-color: ${props => props.highlightColor};
  mix-blend-mode: ${props => props.highlightBlend};

  @supports not (mix-blend-mode: ${props => props.highlightBlend}) {
    display: none;
  }
`;

const ChhildrenParent = styled(FullsizeDiv)`
  mix-blend-mode: ${props => props.shadowBlend};

  @supports not (mix-blend-mode: ${props => props.shadowBlend}) {
    opacity: 0.7;
  }
`;

const Duotone = ({
  shadowColor, shadowBlend, highlightColor, highlightBlend, children,
}) => (
  <React.Fragment>
    <FallbackGradient
      shadowBlend={shadowBlend}
      shadowColor={shadowColor}
      highlightColor={highlightColor}
    />
    {/* <DuotoneShadow shadowColor={shadowColor} /> */}
    <ChhildrenParent shadowBlend={shadowBlend}>
      {children}
    </ChhildrenParent>
    <DuotoneHighlight highlightColor={highlightColor} highlightBlend={highlightBlend} />
  </React.Fragment>
);

Duotone.propTypes = {
  shadowColor: PropTypes.string.isRequired,
  shadowBlend: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
  highlightBlend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Duotone;
