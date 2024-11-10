import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/global/global.css';
import { utils } from '@/styles/utils/utils.css';

export const container = style({
  height: '100%',
  padding: utils.px(2),
  borderRadius: utils.px(1),
  backgroundColor: utils.rgbaColor(vars.colors.black, 1),
});

export const main = style({
  width: '100%',
  padding: 8,
  backgroundColor: utils.rgbaColor(vars.colors.white, 0.04),
});

export const global_container = style({
  display: 'flex',
  minHeight: '100vh',
});
