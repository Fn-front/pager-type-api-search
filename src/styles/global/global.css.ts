import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { SPACING } from '../utils/spacing';

// グローバル変数の定義
export const vars = createGlobalTheme(':root', {
  colors: {
    white: '255, 255, 255',
    black: '25, 26, 26',
    blackDefault: '#000',
    greenLight: '0, 255, 0',
  },
  sizing: {
    basePx: SPACING.base.toString(),
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
});

globalStyle('body', {
  color: `rgba(${vars.colors.white}, 1)`,
  background: `rgba(${vars.colors.black}, 1)`,
  fontSize: '1.6rem',
  margin: 0,
  fontWeight: 400,
  lineHeight: 1.5,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('summary', {
  cursor: 'pointer',
});
