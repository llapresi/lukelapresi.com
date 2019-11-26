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

// Gradient Generator
const Gradient = styled(FullsizeDiv)`
  background: linear-gradient(0deg, ${props => props.shadowColor} 0%, ${props => props.highlightColor} 100%);
`;

const DuotoneHighlight = styled(FullsizeDiv)`
  background-color: ${props => props.highlightColor};
  mix-blend-mode: ${props => props.highlightBlend};

  @supports not (mix-blend-mode: ${props => props.highlightBlend}) {
    display: none;
  }
`;

// shadowBlend is passed in a prop to detect IE/Edge fallback
const ChildrenParent = styled(FullsizeDiv)`
  mix-blend-mode: ${props => props.shadowBlend};

  @supports not (mix-blend-mode: ${props => props.shadowBlend}) {
    opacity: 0.5;
  }
`;

const Duotone = ({
  shadowColor, shadowBlend, highlightColor, highlightBlend, children,
}) => (
  <React.Fragment>
    <Gradient
      shadowBlend={shadowBlend}
      shadowColor={shadowColor}
      highlightColor={highlightColor}
    />
    {/* <DuotoneShadow shadowColor={shadowColor} /> */}
    <ChildrenParent shadowBlend={shadowBlend}>
      {children}
    </ChildrenParent>
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
