import Typography from 'typography';

const config = require('../../config/website');

const typography = new Typography({
  title: 'Emma',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, 'arial', 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'arial', 'sans-serif'],
  scaleRatio: 2.61,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['700'],
    },
    {
      name: config.bodyFontFamily,
      styles: ['400'],
    },
  ],
});

export default typography;
