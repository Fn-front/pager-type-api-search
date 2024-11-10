import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/global/global.css';

export const pagination_wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
});

export const pagination = style({
  display: 'flex',
  gap: '8px',
});

export const pagination_item = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '30px',
  border: `1px solid rgba(${vars.colors.white}, 0.5)`,
});

export const pagination_item_active = style({
  backgroundColor: `rgba(${vars.colors.white}, 0.2)`,
});

export const pagination_item_button = style({
  width: '100%',
  height: '100%',
  textAlign: 'center',
});
