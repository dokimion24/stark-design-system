const tokens = {
  'colors.gray.50': {
    value: '#F9FAFB',
    variable: 'var(--colors-gray-50)',
  },
  'colors.gray.100': {
    value: '#F3F4F6',
    variable: 'var(--colors-gray-100)',
  },
  'colors.gray.200': {
    value: '#E5E7EB',
    variable: 'var(--colors-gray-200)',
  },
  'colors.gray.300': {
    value: '#D1D5DB',
    variable: 'var(--colors-gray-300)',
  },
  'colors.gray.400': {
    value: '#9CA3AF',
    variable: 'var(--colors-gray-400)',
  },
  'colors.gray.500': {
    value: '#6B7280',
    variable: 'var(--colors-gray-500)',
  },
  'colors.gray.600': {
    value: '#4B5563',
    variable: 'var(--colors-gray-600)',
  },
  'colors.gray.700': {
    value: '#374151',
    variable: 'var(--colors-gray-700)',
  },
  'colors.gray.800': {
    value: '#1F2937',
    variable: 'var(--colors-gray-800)',
  },
  'colors.gray.900': {
    value: '#111827',
    variable: 'var(--colors-gray-900)',
  },
  'colors.grayDark.50': {
    value: '#FAFAFA',
    variable: 'var(--colors-gray-dark-50)',
  },
  'colors.grayDark.100': {
    value: '#F0F1F1',
    variable: 'var(--colors-gray-dark-100)',
  },
  'colors.grayDark.200': {
    value: '#ECECEC',
    variable: 'var(--colors-gray-dark-200)',
  },
  'colors.grayDark.300': {
    value: '#CECECE',
    variable: 'var(--colors-gray-dark-300)',
  },
  'colors.grayDark.400': {
    value: '#94969C',
    variable: 'var(--colors-gray-dark-400)',
  },
  'colors.grayDark.500': {
    value: '#85888E',
    variable: 'var(--colors-gray-dark-500)',
  },
  'colors.grayDark.600': {
    value: '#61646C',
    variable: 'var(--colors-gray-dark-600)',
  },
  'colors.grayDark.700': {
    value: '#343A41',
    variable: 'var(--colors-gray-dark-700)',
  },
  'colors.grayDark.800': {
    value: '#1F242F',
    variable: 'var(--colors-gray-dark-800)',
  },
  'colors.grayDark.900': {
    value: '#0C111D',
    variable: 'var(--colors-gray-dark-900)',
  },
  'colors.red.50': {
    value: '#FFF5F6',
    variable: 'var(--colors-red-50)',
  },
  'colors.red.100': {
    value: '#FFEAEA',
    variable: 'var(--colors-red-100)',
  },
  'colors.red.200': {
    value: '#FECDCA',
    variable: 'var(--colors-red-200)',
  },
  'colors.red.300': {
    value: '#FDA29B',
    variable: 'var(--colors-red-300)',
  },
  'colors.red.400': {
    value: '#F97066',
    variable: 'var(--colors-red-400)',
  },
  'colors.red.500': {
    value: '#F04438',
    variable: 'var(--colors-red-500)',
  },
  'colors.red.600': {
    value: '#D92D20',
    variable: 'var(--colors-red-600)',
  },
  'colors.red.700': {
    value: '#B42318',
    variable: 'var(--colors-red-700)',
  },
  'colors.red.800': {
    value: '#912018',
    variable: 'var(--colors-red-800)',
  },
  'colors.red.900': {
    value: '#7A271A',
    variable: 'var(--colors-red-900)',
  },
  'colors.yellow.50': {
    value: '#FFFAEB',
    variable: 'var(--colors-yellow-50)',
  },
  'colors.yellow.100': {
    value: '#FEF0C7',
    variable: 'var(--colors-yellow-100)',
  },
  'colors.yellow.200': {
    value: '#FEDF89',
    variable: 'var(--colors-yellow-200)',
  },
  'colors.yellow.300': {
    value: '#FEC84B',
    variable: 'var(--colors-yellow-300)',
  },
  'colors.yellow.400': {
    value: '#FDB022',
    variable: 'var(--colors-yellow-400)',
  },
  'colors.yellow.500': {
    value: '#F79009',
    variable: 'var(--colors-yellow-500)',
  },
  'colors.yellow.600': {
    value: '#DC6803',
    variable: 'var(--colors-yellow-600)',
  },
  'colors.yellow.700': {
    value: '#B54708',
    variable: 'var(--colors-yellow-700)',
  },
  'colors.yellow.800': {
    value: '#93370D',
    variable: 'var(--colors-yellow-800)',
  },
  'colors.yellow.900': {
    value: '#7A2E0E',
    variable: 'var(--colors-yellow-900)',
  },
  'colors.blue.50': {
    value: '#F6FEF9',
    variable: 'var(--colors-blue-50)',
  },
  'colors.blue.100': {
    value: '#EDFCF2',
    variable: 'var(--colors-blue-100)',
  },
  'colors.blue.200': {
    value: '#D3F8DF',
    variable: 'var(--colors-blue-200)',
  },
  'colors.blue.300': {
    value: '#AAF0C1',
    variable: 'var(--colors-blue-300)',
  },
  'colors.blue.400': {
    value: '#73E2A3',
    variable: 'var(--colors-blue-400)',
  },
  'colors.blue.500': {
    value: '#4CC38A',
    variable: 'var(--colors-blue-500)',
  },
  'colors.blue.600': {
    value: '#30A46C',
    variable: 'var(--colors-blue-600)',
  },
  'colors.blue.700': {
    value: '#21845A',
    variable: 'var(--colors-blue-700)',
  },
  'colors.blue.800': {
    value: '#067647',
    variable: 'var(--colors-blue-800)',
  },
  'colors.blue.900': {
    value: '#05603B',
    variable: 'var(--colors-blue-900)',
  },
  'colors.white': {
    value: '#FFFFFF',
    variable: 'var(--colors-white)',
  },
  'colors.black': {
    value: '#000000',
    variable: 'var(--colors-black)',
  },
  'gradients.blueGradientDark': {
    value: 'linear-gradient(to right, #4CC38A, #21845A)',
    variable: 'var(--gradients-blue-gradient-dark)',
  },
  'gradients.redGradientLight': {
    value: 'linear-gradient(to right, #F97066, #D92D20)',
    variable: 'var(--gradients-red-gradient-light)',
  },
  'gradients.yellowGradientLight': {
    value: 'linear-gradient(to right, #FDB022, #DC6803)',
    variable: 'var(--gradients-yellow-gradient-light)',
  },
  'spacing.xs': {
    value: '0.25rem',
    variable: 'var(--spacing-xs)',
  },
  'spacing.sm': {
    value: '0.375rem',
    variable: 'var(--spacing-sm)',
  },
  'spacing.md': {
    value: '0.5rem',
    variable: 'var(--spacing-md)',
  },
  'spacing.lg': {
    value: '0.75rem',
    variable: 'var(--spacing-lg)',
  },
  'spacing.xl': {
    value: '1rem',
    variable: 'var(--spacing-xl)',
  },
  'radii.none': {
    value: '0rem',
    variable: 'var(--radii-none)',
  },
  'radii.xs': {
    value: '0.25rem',
    variable: 'var(--radii-xs)',
  },
  'radii.sm': {
    value: '0.5rem',
    variable: 'var(--radii-sm)',
  },
  'radii.md': {
    value: '0.375rem',
    variable: 'var(--radii-md)',
  },
  'radii.lg': {
    value: '0.625rem',
    variable: 'var(--radii-lg)',
  },
  'radii.xl': {
    value: '0.75rem',
    variable: 'var(--radii-xl)',
  },
  'radii.full': {
    value: '2.5rem',
    variable: 'var(--radii-full)',
  },
  'colors.primary': {
    value: '#4CC38A',
    variable: 'var(--colors-primary)',
  },
  'colors.success': {
    value: '#30A46C',
    variable: 'var(--colors-success)',
  },
  'colors.error': {
    value: '#D92D20',
    variable: 'var(--colors-error)',
  },
  'colors.backgroundNormal': {
    value: '#FFFFFF',
    variable: 'var(--colors-background-normal)',
  },
  'colors.backgroundDimmer': {
    value: 'rgba(0, 0, 0, 0.8)',
    variable: 'var(--colors-background-dimmer)',
  },
  'colors.errorBackground': {
    value: '#FFEAEA',
    variable: 'var(--colors-error-background)',
  },
  'colors.blueDisabled': {
    value: '#EDFCF2',
    variable: 'var(--colors-blue-disabled)',
  },
  'colors.blueHover': {
    value: '#30A46C',
    variable: 'var(--colors-blue-hover)',
  },
  'colors.bluePressed': {
    value: '#73E2A3',
    variable: 'var(--colors-blue-pressed)',
  },
  'colors.shadowSmall': {
    value: 'rgba(0, 0, 0, 0.1)',
    variable: 'var(--colors-shadow-small)',
  },
  'colors.shadowMedium': {
    value: 'rgba(0, 0, 0, 0.2)',
    variable: 'var(--colors-shadow-medium)',
  },
  'spacing.-xs': {
    value: 'calc(var(--spacing-xs) * -1)',
    variable: 'var(--spacing-xs)',
  },
  'spacing.-sm': {
    value: 'calc(var(--spacing-sm) * -1)',
    variable: 'var(--spacing-sm)',
  },
  'spacing.-md': {
    value: 'calc(var(--spacing-md) * -1)',
    variable: 'var(--spacing-md)',
  },
  'spacing.-lg': {
    value: 'calc(var(--spacing-lg) * -1)',
    variable: 'var(--spacing-lg)',
  },
  'spacing.-xl': {
    value: 'calc(var(--spacing-xl) * -1)',
    variable: 'var(--spacing-xl)',
  },
  'colors.colorPalette.50': {
    value: 'var(--colors-color-palette-50)',
    variable: 'var(--colors-color-palette-50)',
  },
  'colors.colorPalette.100': {
    value: 'var(--colors-color-palette-100)',
    variable: 'var(--colors-color-palette-100)',
  },
  'colors.colorPalette.200': {
    value: 'var(--colors-color-palette-200)',
    variable: 'var(--colors-color-palette-200)',
  },
  'colors.colorPalette.300': {
    value: 'var(--colors-color-palette-300)',
    variable: 'var(--colors-color-palette-300)',
  },
  'colors.colorPalette.400': {
    value: 'var(--colors-color-palette-400)',
    variable: 'var(--colors-color-palette-400)',
  },
  'colors.colorPalette.500': {
    value: 'var(--colors-color-palette-500)',
    variable: 'var(--colors-color-palette-500)',
  },
  'colors.colorPalette.600': {
    value: 'var(--colors-color-palette-600)',
    variable: 'var(--colors-color-palette-600)',
  },
  'colors.colorPalette.700': {
    value: 'var(--colors-color-palette-700)',
    variable: 'var(--colors-color-palette-700)',
  },
  'colors.colorPalette.800': {
    value: 'var(--colors-color-palette-800)',
    variable: 'var(--colors-color-palette-800)',
  },
  'colors.colorPalette.900': {
    value: 'var(--colors-color-palette-900)',
    variable: 'var(--colors-color-palette-900)',
  },
  'colors.colorPalette': {
    value: 'var(--colors-color-palette)',
    variable: 'var(--colors-color-palette)',
  },
};

export function token(path, fallback) {
  return tokens[path]?.value || fallback;
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback;
}

token.var = tokenVar;
