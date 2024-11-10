// sprinkles.css.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { SPACING } from '../utils/spacing';

// レスポンシブな値を定義
const space = {
  none: 0,
  small: `${SPACING.base * 1}px`,
  medium: `${SPACING.base * 2}px`,
  large: `${SPACING.base * 3}px`,
};

const colors = {
  blue: '#0066ff',
  red: '#ff0000',
  green: '#00ff00',
};

// プロパティを定義
const properties = defineProperties({
  properties: {
    padding: space,
    margin: space,
    backgroundColor: colors,
    color: colors,
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end'],
    gap: space,
  },
  // レスポンシブ設定
  conditions: {
    mobile: { '@media': 'screen and (max-width: 767px)' },
    // tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 768px)' },
  },
  defaultCondition: 'mobile',
});

// スプリンクルを作成
export const sprinkles = createSprinkles(properties);

// 型の取得用
export type Sprinkles = Parameters<typeof sprinkles>[0];
