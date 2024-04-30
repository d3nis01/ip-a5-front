import ITheme from '../types/ITheme';

const defaultTheme: ITheme = {
  colors: {
    textPrimary: '#002D51',
    white: '#FFFFFF',
    black: '#000000',
    primaryPurple: '#3388cc',
    secondaryPurple: '#C4CEFF',
    green: '#4CBC9A',
    red: '#FF4550',
    primaryGray: '#D3EBFF',
    secondaryGray: '#617CA9', //rgb(51, 136, 204)
    backgroundGray: '#F1F8FF',
  },
  fontSize: {
    xxs: '8px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    gig: '40px',
  },
  fontWeights: {
    bold: 600,
    regular: 500,
    light: 400,
  },
  fonts: {
    roboto: 'Roboto',
  },
};

export default defaultTheme;
