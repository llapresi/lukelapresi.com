import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import styled, { css } from 'react-emotion';
import { SEO, Navigation, Footer } from '.';
import theme from '../../config/theme';
import Transition from './transition';

const MainContainer = styled.div`{
  margin-top: ${props => props.theme.toolbar.height};
  flex: 1;
  overflow: hidden;
}`;

const PageParent = styled.div`{
  overflow: hidden;
  @supports (height: -webkit-fill-available) {
    height: -webkit-fill-available;
  }
}`;

const ParallaxParent = styled.div`
  perspective: 1px;
  perspective-origin: 0 0;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: calc(100vh - ${props => props.theme.toolbar.height});
  -webkit-overflow-scrolling: touch;
}`;


const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <PageParent>
      <SEO />
      <Navigation />
      <MainContainer>
        <Transition location={location}>
          <ParallaxParent>
            {children}
            <Footer />
          </ParallaxParent>
        </Transition>
      </MainContainer>
    </PageParent>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.string.isRequired,
};
