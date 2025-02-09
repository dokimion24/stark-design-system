import * as color from './color.ts';

export const skeuomorphicShadow = {
  offsetX: 0,
  offsetY: 1,
  blur: 2,
  spread: 0,
  color: color.shadowXs,
};

export const skeuomorphicInner = {
  offsetX: 0,
  offsetY: -2,
  blur: 0,
  spread: 0,
  color: color.shadowXs,
  inset: true,
};

export const skeuomorphicBorder = {
  offsetX: 0,
  offsetY: 0,
  blur: 0,
  spread: 1,
  color: color.skeuomorphicShadow,
  inset: true,
};
