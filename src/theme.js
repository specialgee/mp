import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// import AbrilFatface from './assets/font/AbrilFatface-Regular.ttf';

// const abrilFatface = {
//   fontFamily: 'AbrilFatface',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('AbrilFatface'),
//     local('AbrilFatface-Regular'),
//     url(${AbrilFatface}) format('ttf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };


// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0048ff',
    },
    secondary: {
      main: '#006eff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  // typography: {
  //   fontFamily: 'AbrilFatface, Arial',
  // },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [abrilFatface],
  //     },
  //   },
  // },
});

export default theme;
