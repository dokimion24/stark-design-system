import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Switch, type SwitchProps } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '스위치 사이즈를 선택하세요.',
      table: {
        type: { summary: 'sm | md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Template = (args: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return (
    <Switch
      {...args}
      checked={isChecked}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
    />
  );
};

export const Default: Story = {
  render: (args: SwitchProps) => <Template {...args} />,
  args: {
    checked: false,
    size: 'sm',
  },
};

export const Checked: Story = {
  render: (args: SwitchProps) => <Template {...args} />,
  args: {
    checked: true,
    size: 'sm',
  },
};

export const Disabled: Story = {
  render: (args: SwitchProps) => <Template {...args} />,
  args: {
    checked: false,
    disabled: true,
    size: 'sm',
  },
};

export const MediumSize: Story = {
  render: (args: SwitchProps) => <Template {...args} />,
  args: {
    checked: false,
    size: 'md',
  },
};
