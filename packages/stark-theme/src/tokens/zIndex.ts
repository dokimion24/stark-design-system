import { defineTokens } from '@pandacss/dev';
import { zIndex as starkZIndex } from 'starkds-tokens';

export const zIndex = defineTokens.zIndex({
  dropdown: {
    value: starkZIndex.dropdown,
  },
  modal: {
    value: starkZIndex.modal,
  },
  toast: {
    value: starkZIndex.toast,
  },
  tooltip: {
    value: starkZIndex.tooltip,
  },
  backdrop: {
    value: starkZIndex.backdrop,
  },
});
