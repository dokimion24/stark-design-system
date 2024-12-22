import { defineSemanticTokens, defineTokens } from '@pandacss/dev';
import { color } from 'starkds-tokens';

export const colors = defineTokens.colors({
  gray: {
    50: { value: color.gray50 },
    100: { value: color.gray100 },
    200: { value: color.gray200 },
    300: { value: color.gray300 },
    400: { value: color.gray400 },
    500: { value: color.gray500 },
    600: { value: color.gray600 },
    700: { value: color.gray700 },
    800: { value: color.gray800 },
    900: { value: color.gray900 },
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
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: { value: color.primary },
    success: { value: color.success },
    error: { value: color.error },
    backgroundNormal: { value: color.backgroundNormal },
    backgroundDimmer: { value: color.backgroundDimmer },
    errorBackground: { value: color.errorBackground },
    blueDisabled: { value: color.blueDisabled },
    blueHover: { value: color.blueHover },
    bluePressed: { value: color.bluePressed },
    shadowSmall: { value: color.shadowSmall },
    shadowMedium: { value: color.shadowMedium },
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
