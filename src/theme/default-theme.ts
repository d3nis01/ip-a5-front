import ITheme from '../types/ITheme';

const defaultTheme: ITheme = {
  colors: {
    textPrimary: '#303972',
    white: '#FFFFFF',
    black: '#000000',
    primaryPurple: '#241D79',
    secondaryPurple: '#C4CEFF',
    green: '#4CBC9A',
    red: '#FF4550',
    primaryGray: '#A098AE',
    secondaryGray: '#617CA9',
    backgroundGray: '#F3F4FF',
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
    poppins: 'Poppins',
  },
};

export default defaultTheme;
