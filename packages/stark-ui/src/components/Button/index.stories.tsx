// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

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

/**
 * 기본(Default) 스토리
 * Docs 탭에서는 이 스토리만 보여집니다.
 */
export const Default: Story = {
  args: {
    children: '버튼',
    size: 'lg',
    variant: 'primary',
  },
};

const sizes: Array<'sm' | 'md' | 'lg' | 'xl' | '2xl'> = ['sm', 'md', 'lg', 'xl', '2xl'];

export const Primary: Story = {
  name: 'Primary Button',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {sizes.map((size) => (
        <Button key={size} size={size} variant="primary">
          {`Primary ${size}`}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: { disable: true },
  },
};

export const Secondary: Story = {
  name: 'Secondary Button',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {sizes.map((size) => (
        <Button key={size} size={size} variant="secondary">
          {`Secondary ${size}`}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: { disable: true },
  },
};

export const Outline: Story = {
  name: 'Outline Button',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {sizes.map((size) => (
        <Button key={size} size={size} variant="outline">
          {`Outline ${size}`}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: { disable: true },
  },
};

export const Ghost: Story = {
  name: 'Ghost Button',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {sizes.map((size) => (
        <Button key={size} size={size} variant="ghost">
          {`Ghost ${size}`}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: { disable: true },
  },
};
