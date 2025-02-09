/* eslint-disable */
export type Token =
  | 'colors.gray.50'
  | 'colors.gray.100'
  | 'colors.gray.200'
  | 'colors.gray.300'
  | 'colors.gray.400'
  | 'colors.gray.500'
  | 'colors.gray.600'
  | 'colors.gray.700'
  | 'colors.gray.800'
  | 'colors.gray.900'
  | 'colors.grayDark.50'
  | 'colors.grayDark.100'
  | 'colors.grayDark.200'
  | 'colors.grayDark.300'
  | 'colors.grayDark.400'
  | 'colors.grayDark.500'
  | 'colors.grayDark.600'
  | 'colors.grayDark.700'
  | 'colors.grayDark.800'
  | 'colors.grayDark.900'
  | 'colors.red.50'
  | 'colors.red.100'
  | 'colors.red.200'
  | 'colors.red.300'
  | 'colors.red.400'
  | 'colors.red.500'
  | 'colors.red.600'
  | 'colors.red.700'
  | 'colors.red.800'
  | 'colors.red.900'
  | 'colors.yellow.50'
  | 'colors.yellow.100'
  | 'colors.yellow.200'
  | 'colors.yellow.300'
  | 'colors.yellow.400'
  | 'colors.yellow.500'
  | 'colors.yellow.600'
  | 'colors.yellow.700'
  | 'colors.yellow.800'
  | 'colors.yellow.900'
  | 'colors.blue.50'
  | 'colors.blue.100'
  | 'colors.blue.200'
  | 'colors.blue.300'
  | 'colors.blue.400'
  | 'colors.blue.500'
  | 'colors.blue.600'
  | 'colors.blue.700'
  | 'colors.blue.800'
  | 'colors.blue.900'
  | 'colors.white'
  | 'colors.black'
  | 'gradients.blueGradientDark'
  | 'gradients.redGradientLight'
  | 'gradients.yellowGradientLight'
  | 'spacing.xs'
  | 'spacing.sm'
  | 'spacing.md'
  | 'spacing.lg'
  | 'spacing.xl'
  | 'radii.none'
  | 'radii.xs'
  | 'radii.sm'
  | 'radii.md'
  | 'radii.lg'
  | 'radii.xl'
  | 'radii.full'
  | 'colors.primary'
  | 'colors.success'
  | 'colors.error'
  | 'colors.backgroundNormal'
  | 'colors.backgroundDimmer'
  | 'colors.errorBackground'
  | 'colors.blueDisabled'
  | 'colors.blueHover'
  | 'colors.bluePressed'
  | 'colors.shadowSmall'
  | 'colors.shadowMedium'
  | 'spacing.-xs'
  | 'spacing.-sm'
  | 'spacing.-md'
  | 'spacing.-lg'
  | 'spacing.-xl'
  | 'colors.colorPalette.50'
  | 'colors.colorPalette.100'
  | 'colors.colorPalette.200'
  | 'colors.colorPalette.300'
  | 'colors.colorPalette.400'
  | 'colors.colorPalette.500'
  | 'colors.colorPalette.600'
  | 'colors.colorPalette.700'
  | 'colors.colorPalette.800'
  | 'colors.colorPalette.900'
  | 'colors.colorPalette';

export type ColorPalette =
  | 'gray'
  | 'grayDark'
  | 'red'
  | 'yellow'
  | 'blue'
  | 'white'
  | 'black'
  | 'primary'
  | 'success'
  | 'error'
  | 'backgroundNormal'
  | 'backgroundDimmer'
  | 'errorBackground'
  | 'blueDisabled'
  | 'blueHover'
  | 'bluePressed'
  | 'shadowSmall'
  | 'shadowMedium';

export type ColorToken =
  | 'gray.50'
  | 'gray.100'
  | 'gray.200'
  | 'gray.300'
  | 'gray.400'
  | 'gray.500'
  | 'gray.600'
  | 'gray.700'
  | 'gray.800'
  | 'gray.900'
  | 'grayDark.50'
  | 'grayDark.100'
  | 'grayDark.200'
  | 'grayDark.300'
  | 'grayDark.400'
  | 'grayDark.500'
  | 'grayDark.600'
  | 'grayDark.700'
  | 'grayDark.800'
  | 'grayDark.900'
  | 'red.50'
  | 'red.100'
  | 'red.200'
  | 'red.300'
  | 'red.400'
  | 'red.500'
  | 'red.600'
  | 'red.700'
  | 'red.800'
  | 'red.900'
  | 'yellow.50'
  | 'yellow.100'
  | 'yellow.200'
  | 'yellow.300'
  | 'yellow.400'
  | 'yellow.500'
  | 'yellow.600'
  | 'yellow.700'
  | 'yellow.800'
  | 'yellow.900'
  | 'blue.50'
  | 'blue.100'
  | 'blue.200'
  | 'blue.300'
  | 'blue.400'
  | 'blue.500'
  | 'blue.600'
  | 'blue.700'
  | 'blue.800'
  | 'blue.900'
  | 'white'
  | 'black'
  | 'primary'
  | 'success'
  | 'error'
  | 'backgroundNormal'
  | 'backgroundDimmer'
  | 'errorBackground'
  | 'blueDisabled'
  | 'blueHover'
  | 'bluePressed'
  | 'shadowSmall'
  | 'shadowMedium'
  | 'colorPalette.50'
  | 'colorPalette.100'
  | 'colorPalette.200'
  | 'colorPalette.300'
  | 'colorPalette.400'
  | 'colorPalette.500'
  | 'colorPalette.600'
  | 'colorPalette.700'
  | 'colorPalette.800'
  | 'colorPalette.900'
  | 'colorPalette';

export type GradientToken = 'blueGradientDark' | 'redGradientLight' | 'yellowGradientLight';

export type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '-xs' | '-sm' | '-md' | '-lg' | '-xl';

export type RadiusToken = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type Tokens = {
  colors: ColorToken;
  gradients: GradientToken;
  spacing: SpacingToken;
  radii: RadiusToken;
} & { [token: string]: never };

export type TokenCategory =
  | 'aspectRatios'
  | 'zIndex'
  | 'opacity'
  | 'colors'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'lineHeights'
  | 'letterSpacings'
  | 'sizes'
  | 'cursor'
  | 'shadows'
  | 'spacing'
  | 'radii'
  | 'borders'
  | 'borderWidths'
  | 'durations'
  | 'easings'
  | 'animations'
  | 'blurs'
  | 'gradients'
  | 'breakpoints'
  | 'assets';
