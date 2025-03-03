import { defineSemanticTokens, defineTokens } from '@pandacss/dev';
import { color } from 'starkds-tokens';

export const colors = defineTokens.colors({
  grayNeural: {
    50: { value: color.grayNeutral50 },
    100: { value: color.grayNeutral100 },
    200: { value: color.grayNeutral200 },
    300: { value: color.grayNeutral300 },
    400: { value: color.grayNeutral400 },
    500: { value: color.grayNeutral500 },
    600: { value: color.grayNeutral600 },
    700: { value: color.grayNeutral700 },
    800: { value: color.grayNeutral800 },
    900: { value: color.grayNeutral900 },
  },
  grayDark: {
    50: { value: color.grayDark50 },
    100: { value: color.grayDark100 },
    200: { value: color.grayDark200 },
    300: { value: color.grayDark300 },
    400: { value: color.grayDark400 },
    500: { value: color.grayDark500 },
    600: { value: color.grayDark600 },
    700: { value: color.grayDark700 },
    800: { value: color.grayDark800 },
    900: { value: color.grayDark900 },
  },
  red: {
    50: { value: color.red50 },
    100: { value: color.red100 },
    200: { value: color.red200 },
    300: { value: color.red300 },
    400: { value: color.red400 },
    500: { value: color.red500 },
    600: { value: color.red600 },
    700: { value: color.red700 },
    800: { value: color.red800 },
    900: { value: color.red900 },
  },
  yellow: {
    50: { value: color.yellow50 },
    100: { value: color.yellow100 },
    200: { value: color.yellow200 },
    300: { value: color.yellow300 },
    400: { value: color.yellow400 },
    500: { value: color.yellow500 },
    600: { value: color.yellow600 },
    700: { value: color.yellow700 },
    800: { value: color.yellow800 },
    900: { value: color.yellow900 },
  },
  blue: {
    50: { value: color.blue50 },
    100: { value: color.blue100 },
    200: { value: color.blue200 },
    300: { value: color.blue300 },
    400: { value: color.blue400 },
    500: { value: color.blue500 },
    600: { value: color.blue600 },
    700: { value: color.blue700 },
    800: { value: color.blue800 },
    900: { value: color.blue900 },
  },
  white: { value: color.white },
  black: { value: color.black },

  whiteOpacity: {
    20: { value: color.whiteOpacity20 },
    40: { value: color.whiteOpacity40 },
    60: { value: color.whiteOpacity60 },
    80: { value: color.whiteOpacity80 },
  },
  blackOpacity: {
    20: { value: color.blackOpacity20 },
    40: { value: color.blackOpacity40 },
    60: { value: color.blackOpacity60 },
    80: { value: color.blackOpacity80 },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    textWhite: { value: color.textWhite },
    textBlack: { value: color.textBlack },

    primary: { value: color.primary },
    primaryHoverBackground: { value: color.primaryHoverBackground },
    primaryBorder: { value: color.primaryBorder },

    secondary: { value: color.secondary },
    secondaryHoverBackground: { value: color.secondaryHoverBackground },
    secondaryBorder: { value: color.secondaryBorder },

    outlineHoverBackground: { value: color.outlineHoverBackground },
    activeBackground: { value: color.activeBackground },

    border: { value: color.border },
    focusBorder: { value: color.focusBorder },
    placeholder: { value: color.placeholder },

    disabledBackground: { value: color.disabledBackground },
    disabledText: { value: color.disabledText },
    disabledBorder: { value: color.disabledBorder },
    captionColor: { value: color.captionColor },
    success: { value: color.success },
    error: { value: color.error },
    backgroundNormal: { value: color.backgroundNormal },
    backgroundDimmer: { value: color.backgroundDimmer },
    backgroundInActive: { value: color.backgroundInActive },
    backgroundActive: { value: color.backgroundActive },
    errorBackground: { value: color.errorBackground },

    shadowXs: { value: color.shadowXs },
    skeuomorphicShadow: { value: color.skeuomorphicShadow },
  },
});

export const gradients = defineTokens.gradients({
  blueGradientDark: {
    value: `linear-gradient(to right, ${color.blue500}, ${color.blue700})`,
  },
  redGradientLight: {
    value: `linear-gradient(to right, ${color.red400}, ${color.red600})`,
  },
  yellowGradientLight: {
    value: `linear-gradient(to right, ${color.yellow400}, ${color.yellow600})`,
  },
});
