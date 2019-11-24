import styled from 'react-emotion';

const CutCorner = styled.div`
  background: linear-gradient(225deg, transparent ${props => props.theme.corners.small},  ${props => props.theme.brand.secondary} ${props => props.theme.corners.small});
`;

export default CutCorner;