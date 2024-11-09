// import { vars } from '../global/global.css';
import { SPACING } from '../utils/spacing';

// ユーティリティ関数
export const utils = {
  rgbaColor: (rgb: string, alpha: number) => `rgba(${rgb}, ${alpha})`,
  px: (multiplier: number) => `${multiplier * SPACING.base}px`,
};
