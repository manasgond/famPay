
import { scaleFactor } from './globalStyles';

export const getScaledValue = (value = 0) => {
  return `${value * scaleFactor}px`;
};

export const dim = {
  _0px: getScaledValue(0),
  _1px: getScaledValue(1),
  _2px: getScaledValue(2),
  _4px: getScaledValue(4),
  _8px: getScaledValue(8),
  _12px: getScaledValue(12),
  _16px: getScaledValue(16),
  _20px: getScaledValue(20),
  _24px: getScaledValue(24),
  _28px: getScaledValue(28),
  _32px: getScaledValue(32),
  _36px: getScaledValue(36),
  _40px: getScaledValue(40),
  _44px: getScaledValue(44),
  _48px: getScaledValue(48),
  _52px: getScaledValue(52),
  _56px: getScaledValue(56),
  _60px: getScaledValue(60),
  _scale: function _scale(value) {
    return getScaledValue(value);
  }
};

const theme = {
  color: {
    base_0: '#000000',
    base_10: '#202124',
    base_20: '#54555d',
    base_30: '#72737d',
    base_40: '#6c6d6f',
    base_50: '#c4c4c4',
    base_70: '#c8c9d1',
    base_80: '#eaebf0',
    base_90: '#f8f8fa',
    base_100: '#ffffff',
    blue_20: '#182272',
    blue_40: '#1f2e64',
    blue_50: '#2f53d7',
    blue_80: '#95a3fb',
    blue_100: '#f2f2ff',
    green_50: '#1db510',
    green_80: '#84e57c',
    green_100: '#f2fff5',
    effects_scrim_black_50: 'rgba(0, 0, 0, 0.5)',
    yellow_20: '#886412',
    yellow_50: '#f9b312',
    yellow_80: '#ffe58e',
    yellow_90: '#fdf7e6',
    yellow_100: '#fff8db',
    red_20: '#751818',
    red_50: '#eb5757',
    red_80: '#ff9696',
    red_100: '#fff2f2',
    brand_red: '#cb202d',

  },
  dim,
};

export default theme;