import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/global/global.css';

export const container = style({
  height: '100%',
  padding: 16,
  borderRadius: 8,
  backgroundColor: `rgb(${vars.colors.black})`,
});

export const main = style({
  width: '100%',
  padding: 8,
  backgroundColor: `rgba(${vars.colors.white}, 0.04)`,
});
