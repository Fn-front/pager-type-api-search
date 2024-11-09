import { style, globalStyle } from '@vanilla-extract/css';
// import { vars } from '@/styles/global/global.css';
import { utils } from '@/styles/utils/utils.css';

export const h2 = style({
  fontSize: '2rem',
});

globalStyle(`${h2} + *`, {
  marginTop: utils.px(2),
});
