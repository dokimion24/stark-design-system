// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

/** Primary 버튼 예시 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

/** Secondary 버튼 예시 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

/** Danger 버튼 예시 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};
