// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: '버튼' },
    disabled: { control: 'boolean', defaultValue: false },
    size: {
      control: 'radio',
      options: ['2xl', 'xl', 'lg', 'md', 'sm'],
      defaultValue: 'lg',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      defaultValue: 'primary',
    },
    icon: { control: false },
    style: { control: 'object' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sizes: Array<'sm' | 'md' | 'lg' | 'xl' | '2xl'> = ['sm', 'md', 'lg', 'xl', '2xl'];

export const Group: Story = {
  name: 'Group',
  render: () => {
    const variants: Array<'primary' | 'secondary' | 'outline' | 'ghost'> = [
      'primary',
      'secondary',
      'outline',
      'ghost',
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
        {variants.map((variant) => (
          <div
            key={variant}
            style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            {sizes.map((size) => (
              <Button key={`${variant}-${size}`} size={size} variant={variant}>
                {`${variant.charAt(0).toUpperCase()}${variant.slice(1)} ${size}`}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
