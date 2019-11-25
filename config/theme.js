import { darken } from 'polished';

const brand = {
  primary: '#00dce8',
  secondary: '#0d252b',
  toolbar: '#13282c',
};

const colors = {
  grey: '#25252',
  black: '#000',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: '#087e8b',
  link_color_hover: brand.primary,
};

const corners = {
  small: '1.3em',
  large: '3.8em',
};

const toolbar = {
  height: '4rem',
};

const homepagetiles = {
  ratio: '61.8%', // Golden ratio
  titleHeight: '4.28rem',
};

const project = {
  bannerDistance: '100px',
};

export const overlay = ['#f76262', '#216583', '#65c0ba', '#35477d', '#6c5b7b', '#203541', '#9951ff', '#480032'];

const theme = {
  brand,
  colors,
  corners,
  toolbar,
  homepagetiles,
  project,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
};

export default theme;
