import { vars } from '../global/global.css';

// ユーティリティ関数
export const utils = {
  rgbaColor: (rgb: string, alpha: number) => `rgba(${rgb}, ${alpha})`,
  px: (multiplier: number) => `${multiplier * Number(vars.sizing.basePx)}px`,
};
