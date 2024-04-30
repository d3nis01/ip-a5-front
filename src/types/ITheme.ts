type colors = {
  textPrimary: string;
  white: string;
  black: string;
  primaryPurple: string;
  secondaryPurple: string;
  green: string;
  red: string;
  primaryGray: string;
  secondaryGray: string;
  backgroundGray: string;
};

type fontSize = {
  /** Font size 8px */
  xxs: string;

  /** Font size 12px */
  xs: string;

  /** Font size 14px */
  sm: string;

  /** Font size 16px */
  md: string;

  /** Font size 18px */
  lg: string;

  /** Font size 20px */
  xl: string;

  /** Font size 24px */
  xxl: string;

  /** Font size 40px */
  gig: string;
};

type fontWeights = {
  /** Font weight 600 */
  bold: number;

  /** Font weight 500 */
  regular: number;

  /** Font weight 400 */
  light: number;
};

type fonts = {
  roboto: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fontWeights: fontWeights;
  fonts: fonts;
}

export default ITheme;
